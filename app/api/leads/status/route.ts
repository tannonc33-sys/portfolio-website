import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function PATCH(req: Request) {
    try {
        const body = await req.json();

        const { id, status } = body;

        const { error } = await supabase
            .from("leads")
            .update({ status })
            .eq("id", id);

        if (error) {
            console.error("STATUS UPDATE ERROR:", error);
            return NextResponse.json({ success: false }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("STATUS ROUTE ERROR:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}