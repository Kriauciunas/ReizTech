import React from 'react';

const FilterBtn = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

export default FilterBtn;
