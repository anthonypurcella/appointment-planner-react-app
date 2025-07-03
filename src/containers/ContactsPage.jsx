import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { TileList } from "../components/tileList";

export const ContactsPage = ({currentContacts, addContact}) => {
  // State variables for name, phone number, and email from form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Check for name duplicates
  for (let i = 0; i < currentContacts.length; i++) {
    if (name === currentContacts[i].name) {
      alert("Contact is a duplicate! Please enter a new name.");
    }
  }

  return (
    <div>
      <section className="addContacts">
        <h2>Add Contacts</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          addContact={addContact}
        />
      </section>
      <section className="contactsList">
        <h3>Contacts</h3>
        <TileList currentContacts={currentContacts} />
      </section>
    </div>
  );
};
