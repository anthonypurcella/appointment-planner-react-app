import React from 'react';
import { AppointmentForm  } from '../components/appointmentForm';
import { TileList } from '../components/tileList';

export const AppointmentsPage = () => {
    return (
        <div>
        <h2>Appointments Page</h2>
        <AppointmentForm />
        <TileList />
        </div>
    );
}