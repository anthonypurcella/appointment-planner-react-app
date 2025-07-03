import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <>
      <p className="title-title">{name}</p>
      {Object.entries(description).map(([key, value]) => (
        <p className="tile" key={key}>
          {value}
        </p>
      ))}
    </>
  );
};
