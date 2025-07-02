import React from 'react';

export const ContactPicker = (currentContacts, handleOnChange, value, name) => {

    // Map through currentContacts and have an option for each contact

    return (
        <>
            <select onChange={value} name={name}>
                <option value="">No Contact Selected</option>
            </select>
        </>
    );
}