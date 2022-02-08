import axios from 'axios';

const annonymousInstance = axios.create({
  baseURL: 'https://restcountries.com',
});

const getData = async () => {
  const response = await annonymousInstance.get(
    '/v2/all?fields=name,region,area'
  );
  return response.data;
};

const API = {
  getData,
};

export default API;
