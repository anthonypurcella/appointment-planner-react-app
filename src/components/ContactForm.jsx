import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  addContact,
  resetForm
}) => {


  return (
    <div>
      <form onSubmit={(e) => addContact(e, name, phone, email)}>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          autoComplete="off"
        ></input>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number (xxx-xxx-xxxx)"
          autoComplete="off"
        ></input>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="off"
        ></input>
        <button type="submit" onClick={resetForm}>
          Submit
        </button>
      </form>
    </div>
  );
};
