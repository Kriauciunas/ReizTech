import React from 'react';

import FilterBtn from './FilterBtn';

const Btn = ({ params, sorting }) => {
  return (
    <div className='button'>
      {params.map((button) => (
        <FilterBtn key={button.name} id={button.name} {...button} />
      ))}

      <div className='sorting'>
        {sorting.map((button) => (
          <FilterBtn key={button.name} id={button.name} {...button} />
        ))}
      </div>
    </div>
  );
};

export default Btn;
