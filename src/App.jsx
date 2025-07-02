import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate} from "react-router-dom";
import { ContactsPage } from './containers/contactsPage';
import { AppointmentsPage} from "./containers/AppointmentsPage"
import Root from './components/Root';
import './App.css';

function App() {


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
