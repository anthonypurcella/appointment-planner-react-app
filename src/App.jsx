import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate} from "react-router-dom";
import { ContactsPage } from './containers/contactsPage';
import { AppointmentsPage} from "./containers/AppointmentsPage"
import Root from './components/Root';
import './App.css';

function App() {
  //Contact and Appointment Arrays
  const contactsArr = [];
  const appointmentsArr = [];

  

  //Contact callback function - adds new contact object with name, phone number, and email to the contactsArr
   function addContact(e, name, phone, email) {
    e.preventDefault();

    const newContact = {
      name,
      phone,
      email,
    };

    for (let i = 0; i < contactsArr.length; i++) {
      if (newContact.name === contactsArr[i].name) {
        alert("contact is duplicate");
        return;
      }
    };

    contactsArr.push(newContact);
    console.log(contactsArr);
  }

  //Appointment callback function - adds new appointment object with name, contact, date, and time to the the appointmentsArr

  //Pass contactsArr and contact callback function to ContactsPage

  //Pass appointmentsArr and appointment callback function to AppointmentsPage

  
  //Router Setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/contacts" element={<ContactsPage currentContacts={contactsArr} addContact={addContact}/>} />
        <Route path="/appointments" element={<AppointmentsPage />} />
      </Route>
    )
  );

  return (
    <>
      <h1>Appointment Planner</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;