import React from 'react';
import {Outlet, NavLink} from "react-router-dom";



export default function Root() {
    return (
      <>
        <nav>
          <NavLink to="/contacts">
            Contacts
          </NavLink>
          <NavLink to="/appointments">
            Appointments
          </NavLink>
        </nav>
        <main>
            <Outlet />
        </main>
      </>
    );
}