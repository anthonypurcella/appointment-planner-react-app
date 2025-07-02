import React from 'react';
import { ContactForm } from "../components/ContactForm";
import { TileList } from '../components/tileList';

export const ContactsPage = () => {
    return (
        <div>
        <h2>Contacts Page</h2>
        <ContactForm />
        <TileList />
        </div>
    );
}