const customers = {
  state: {
    customers: [],
    editCustomer: undefined,
  },
  mutations: {
    setCustomers(state, customers) {
      state.customers = customers;
    },
    setEditCustomer(state, customer) {
      state.editCustomer = customer;
    },
  },
};

export default customers;
