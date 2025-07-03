import React from 'react';

export const ContactPicker = ({currentContacts, value, onChange, name}) => {


    return (
        <>
            <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">No Contact Selected</option>
                {currentContacts.map((contact, index) => (
                    <option key={index} value={contact.name}>{contact.name}</option>
                ))}
            </select>
        </>
    );
}