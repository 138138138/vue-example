import axios from 'axios';

export const get = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const post = async (url, data) => {
  const response = await axios.post(url, data);
  return response.data;
};

export const put = async (url, data) => {
  const response = await axios.put(url, data);
  return response.data;
};

export const del = async (url) => {
  const response = await axios.delete(url);
  return response.data;
};