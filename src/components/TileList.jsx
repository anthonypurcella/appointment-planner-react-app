import React from 'react';
import { Tile } from './tile';

export const TileList = ({currentContacts}) => {


    return (
        <>
        <ul>
            {currentContacts.map((contact, index) => (
                <li key={index}>
                    <Tile name={contact.name} description={[contact.phone, contact.email]} />
                </li>
            ))}
        </ul>
        </>
    );
}