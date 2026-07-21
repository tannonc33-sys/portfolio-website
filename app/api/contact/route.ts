import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, service, message, website } = body;

    if (website) {
      return NextResponse.json({ success: true });
    }

    const adminEmailHtml = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const customerEmailHtml = `
      <h2>Thanks for reaching out!</h2>
      <p>Hi ${firstName},</p>
      <p>We received your quote request and will follow up soon.</p>

      <p><strong>Project Details:</strong></p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>

      <p>Thank you,<br/>Chufo's Painting</p>
    `;

    const { error } = await supabase.from("leads").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        service,
        message,
      },
    ]);

    if (error) {
      console.error("SUPABASE ERROR:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    await resend.emails.send({
      from: "Chufo's Painting <quotes@chufos-painting.com>",
      to: [
        "tannon.c.33@gmail.com",
        "bear.martinez@chufospainting.com",
      ],
      subject: "New Quote Request - Chufo's Painting",
      html: adminEmailHtml,
    });

    await resend.emails.send({
      from: "Chufo's Painting <quotes@chufos-painting.com>",
      to: email,
      subject: "We received your request - Chufo's Painting",
      html: customerEmailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}