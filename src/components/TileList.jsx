import React from 'react';
import { Tile } from './tile';

export const TileList = ({currentArrs}) => {


    return (
      <>
        <ul>
          {currentArrs.map((contact, index) => {
            const entries = Object.entries(contact);
            const [[, name], ...rest] = entries;
            const description = rest.map(([, value]) => value);
            return (
              <li key={index}>
                <Tile name={name} description={description} />
              </li>
            );
          })}
        </ul>
      </>
    );
}