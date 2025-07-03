import React, {useState} from 'react';
import { AppointmentForm  } from '../components/appointmentForm';
import { TileList } from '../components/tileList';

export const AppointmentsPage = ({currentAppointments, currentContacts, addAppointment}) => {

    //State variables for name, contact, date, and time from form
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');



    return (
      <div>
        <section className="addAppointments">
          <h2>Add Appointments</h2>
          <AppointmentForm
            name={name}
            setName={setName}
            contact={contact}
            setContact={setContact}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            currentContacts={currentContacts}
            addAppointment={addAppointment}
          />
        </section>
        <section className='appointmentsList'>
            <h3>Appointments</h3>
          <TileList currentArrs={currentAppointments}/>
        </section>
      </div>
    );
}