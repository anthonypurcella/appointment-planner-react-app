import React from 'react';

export const ContactForm = (name, phone, email) => {

    //Handle onSubmit from form
        //Handle if phone number is inputed incorrectly


    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={""}>
          <input id="name" type="text" placeholder="Name"></input>
          <input
            id="phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone Number (xxx-xxx-xxxx)"
          ></input>
          <input id="email" type="email" placeholder="Email"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}