import React from "react";
import {parse, format, isValid} from 'date-fns';

export const Tile = ({ name, description }) => {

  // Format the time to be 12 hour format with "AM/PM" instead of 24 hour and Format Date to Include the Day of the Week
  const formatted = (text) => {
    // Basic regex for HH:mm format (e.g. 14:30 or 09:05)
      const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

      if (timeRegex.test(text)) {
        const parsedTime = parse(text, 'HH:mm', new Date());

        if (isValid(parsedTime)) {
          return format(parsedTime, 'h:mm a');
        }
      }

      if (dateRegex.test(text)) {
        return format(new Date(text), 'EEEE, MMMM d, yyyy');
      }

      return text;
  };


  return (
    <>
      <p className="title-title">{name}</p>
      {Object.entries(description).map(([key, value]) => (
        <p className="tile" key={key}>
          {formatted(value)}
        </p>
      ))}
    </>
  );
};
