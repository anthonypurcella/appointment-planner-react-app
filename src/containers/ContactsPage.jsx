import React, { useState, useEffect } from "react";
import { ContactForm } from "../components/ContactForm";
import { TileList } from "../components/tileList";

export const ContactsPage = ({currentContacts, addContact, resetForm}) => {
  // State variables for name, phone number, and email from form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //Checks if name in input is already a name in the Contacts Array
  useEffect(() => {
    for (let i = 0; i < currentContacts.length; i++) {
      if (name === currentContacts[i].name) {
        alert("Contact is a duplicate! Please enter a new name.");
      }
    }
  }, [name]);


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
          resetForm={resetForm}
        />
      </section>
      <section className="contactsList">
        <h3>Contacts</h3>
        <TileList currentArrs={currentContacts} />
      </section>
    </div>
  );
};
