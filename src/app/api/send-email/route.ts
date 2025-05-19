import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Only initialize Resend if the API key is available
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: NextRequest) {
  // Check if Resend is properly initialized
  if (!resend) {
    console.error(
      "Resend API key is missing. Email functionality is disabled."
    );
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please contact the administrator.",
      },
      { status: 500 }
    );
  }

  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // You can change this to your verified sender
      to: "fben22286@gmail.com",
      subject: `Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
