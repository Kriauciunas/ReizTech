import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.name} id={country.name} {...country} />
      ))}
    </div>
  );
};

export default Countries;
