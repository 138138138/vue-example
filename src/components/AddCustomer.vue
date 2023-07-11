<template>
  <div class="add-customer">
    <h2>Add Customer</h2>
    <div class="form">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
      <label for="mobile">Mobile:</label>
      <input type="number" id="mobile" v-model="mobile" />
      <button @click="addCustomer">Add Customer</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import customerService from '../scripts/Service/CustomerService';

export default defineComponent({
  setup() {
    const store = useStore();
    const name = ref('');
    const email = ref('');
    const mobile = ref('');

    const addCustomer = async () => {
      // call the add customer api
      const customer = { name: name.value, email: email.value, mobile: mobile.value };
      await customerService.createCustomer(customer);

      // Reset the input fields
      name.value = '';
      email.value = '';
      mobile.value = '';

      // refresh the customer list
      const customers = await customerService.getCustomers();
      store.commit('setCustomers', customers);
    };
    return { name, email, mobile, addCustomer };
  },
});
</script>
