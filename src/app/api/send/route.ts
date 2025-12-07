import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!toEmail) {
      console.error("TO_EMAIL environment variable is not set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New message from ${name}`,
      reply_to: email,
      html: `<p>New message from ${name}:</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Error sending email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
