import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { leadId, amount, customerEmail, customerName, description } = body;

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            customer_email: customerEmail,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        unit_amount: amount,
                        product_data: {
                            name: description || "Chufo's Painting Payment",
                        },
                    },
                    quantity: 1,
                },
            ],
            success_url: "http://chufos-painting-website.vercel.app/payment-success",
            cancel_url: "http://chufos-painting-website.vercel.app/payment-cancelled",
            metadata: {
                leadId,
                customerName,
            },
        });

        const { error } = await supabase
            .from("leads")
            .update({
                payment_amount: amount,
                payment_link: session.url,
                payment_status: "pending",
            })
            .eq("id", leadId);

        if (error) {
            console.error("PAYMENT TRACKING ERROR:", error);
            return NextResponse.json({ success: false }, { status: 500 });
        }

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("STRIPE CHECKOUT ERROR:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}