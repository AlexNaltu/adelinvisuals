import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <h1>Pentru mai multe detalii nu ezita sa ma contactezi aici</h1>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
