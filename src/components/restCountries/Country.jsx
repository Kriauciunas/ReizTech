import React from 'react';

const Country = ({ name, region, area }) => {
  return (
    <div className='country'>
      <p className='cnt'>
        Country: <b>{name}</b>
      </p>
      <p className='cnt'>Region: {region}</p>
      <p className='cnt'>Area: {area} km2</p>
    </div>
  );
};

export default Country;
