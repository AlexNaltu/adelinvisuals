import KoalaWelcomeEmail from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "QpL9v@example.com",
      to: "alxnbussines1@gmail.com",
      subject: "Hello from Resend",
      react: KoalaWelcomeEmail({ userFirstname: "Adelin" }),
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
