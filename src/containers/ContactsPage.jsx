import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { TileList } from "../components/tileList";

export const ContactsPage = (currentContacts, contactsFunction) => {
  // State variables for name, phone number, and email from form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Check for name duplicates

  // Add new contact from form submission (if not duplicate)

  return (
    <div>
      <section className="addContacts">
        <h2>Add Contacts</h2>
        <ContactForm name={name} phone={phone} email={email} />
      </section>
      <section className="contactsList">
        <h3>Contacts</h3>
        <TileList currentContacts={currentContacts} />
      </section>
    </div>
  );
};
