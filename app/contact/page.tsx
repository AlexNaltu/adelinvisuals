import KoalaWelcomeEmail from "@/components/email-template";
import { Resend } from "resend";

const ContactPage = () => {
  async function send() {
    "use server";
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: "QpL9v@example.com",
      to: "alxnbussines1@gmail.com",
      subject: "Hello from Resend",
      react: KoalaWelcomeEmail({ userFirstname: "Adelin" }),
    });
    console.log(data);
  }
  return (
    <form action={send}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactPage;
