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

  //Appointment callback function - adds new appointment object with name, contact, date, and time to the the appointmentsArr

  //Pass contactsArr and contact callback function to ContactsPage

  //Pass appointmentsArr and appointment callback function to AppointmentsPage

  
  //Router Setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/contacts" element={<ContactsPage />} />
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
