import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

      <p>Thank you,<br/>Tannon Cearley</p>
    `;

    await resend.emails.send({
      from: "Tannon Cearley <hello@tannoncearleydesign.com>",
      to: [
        "tannon.c.33@gmail.com",
      ],
      subject: "New Portfolio Contact",
      html: adminEmailHtml,
    });

    await resend.emails.send({
      from: "Tannon Cearley <hello@tannoncearleydesign.com>",
      to: email,
      subject: "Thanks for reaching out!",
      html: customerEmailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}