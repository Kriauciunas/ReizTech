import React, { useEffect, useState } from 'react';
import Btn from '../buttons/Btn';
import Countries from './Countries';
import API from '../../services/API';

function RestCountries() {
  const [countries, setCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState(false);
  const [toggleFilterLTU, setToggleFilterLTU] = useState(false);
  const [toggleFilterOceania, setToggleFilterOceania] = useState(false);

  const handleFilterLTU = (e) => {
    if (!toggleFilterLTU) {
      setToggleFilterLTU(true);
      setToggleFilterOceania(false);
    } else {
      setToggleFilterLTU(false);
    }
  };
  const handleFilterOceania = (e) => {
    if (!toggleFilterOceania) {
      setToggleFilterOceania(true);
      setToggleFilterLTU(false);
    } else {
      setToggleFilterOceania(false);
    }
  };

  const handleSorting = (e) => {
    if (sortOrder) {
      setSortOrder(false);
    } else {
      setSortOrder(true);
    }
  };

  const filterButtonParams = [
    {
      name: 'Smaller than Lithuania',
      onClick: handleFilterLTU,
      toggled: toggleFilterLTU,
    },
    {
      name: 'Region: Oceania',
      onClick: handleFilterOceania,
      toggled: toggleFilterOceania,
    },
  ];

  const sortingButtonParams = [
    {
      onClick: handleSorting,
      toggled: sortOrder,
      ...(sortOrder ? { name: 'Z-A' } : { name: 'A-Z' }),
    },
  ];

  useEffect(() => {
    (async () => {
      const data = await API.getData();
      if (!sortOrder) {
        const sortedDataDesending = data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setCountries(sortedDataDesending);
      } else {
        const sortedDataAscending = data.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        setCountries(sortedDataAscending);
      }
      if (toggleFilterLTU) {
        const filterLTU = data.find((x) => x.name === 'Lithuania');
        const newData = data.filter((country) => country.area < filterLTU.area);
        console.log({ filterLTU, newData });
        setCountries(newData);
      } else if (toggleFilterOceania) {
        const newData = data.filter((country) => country.region === 'Oceania');
        console.log({ newData });
        setCountries(newData);
      }
    })();
  }, [toggleFilterLTU, toggleFilterOceania, sortOrder]);

  return (
    <div>
      <Btn params={filterButtonParams} sorting={sortingButtonParams} />
      <Countries countries={countries} />
    </div>
  );
}

export default RestCountries;
