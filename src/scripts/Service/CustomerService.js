'use strict';

import { get, post, put, del } from '../utils/network';

const baseUrl = '/api/customers';

export default {
  getCustomers: async () => {
    const response = await get(baseUrl);
    return response;
  },

  createCustomer: async customer => {
    const response = await post(baseUrl, customer);
    return response;
  },

  updateCustomer: async (id, customer) => {
    const response = await put(`${baseUrl}/${id}`, customer);
    return response;
  },

  deleteCustomer: async id => {
    const response = await del(`${baseUrl}/${id}`);
    return response;
  },

  getCustomer: async id => {
    const response = await get(`${baseUrl}/${id}`);
    return response;
  },
};
