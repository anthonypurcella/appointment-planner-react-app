import React from 'react';
import { ContactPicker } from './ContactPicker';

export const AppointmentForm = ({name, setName, contact, setContact, date, setDate, time, setTime, currentContacts, addAppointment}) => {

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
        <form onSubmit={(e) => addAppointment(e, name, contact, date, time)}>
          <input id='name' type="text" placeholder='Appointment Name' value={name} onChange={(e) => setName(e.target.value)}></input>
          <input id="date" type='date' min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)}></input>
          <input id='time' type='time'  value={time} onChange={(e) => setTime(e.target.value)}></input>
          <ContactPicker currentContacts={currentContacts} value={contact} onChange={setContact} name="contact" />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
}