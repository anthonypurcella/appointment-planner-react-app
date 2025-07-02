import React from 'react';
import { ContactPicker } from './ContactPicker';

export const AppointmentForm = (name, setName, contact, setContact, date, setDate, time, setTime, currentContacts, handleAppointmentSubmit) => {

    //Set the minimum date for form
    const getTodayString = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = `${yyyy}-${mm}-${dd}`;
        return today;
    }

    return (
      <div>
        <h2>Appointment Form</h2>
        <form onSubmit={""}>
          <input id='name' type="text" placeholder='Appointment Name'></input>
          <input id="date" type='date' min={getTodayString()}></input>
          <input id='time' type='time'></input>
          <ContactPicker currentContacts={currentContacts} handleOnChange={''} value={''} name={''}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
}