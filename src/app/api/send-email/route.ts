import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // You can change this to your verified sender
      to: 'fben22286@gmail.com',
      subject: `Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
} 