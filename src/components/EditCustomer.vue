<template>
  <div class="edit-customer">
    <h2>Edit Customer</h2>
    <div v-if="editCustomer">
      <div class="form">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editCustomer.name" />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="editCustomer.email" />
        <label for="mobile">Mobile:</label>
        <input type="number" id="mobile" v-model="editCustomer.mobile" />
        <button @click="updateCustomer">Update Customer</button>
      </div>
    </div>
    <div v-else>
      <p>Please select a record to edit</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import customerService from '../scripts/Service/CustomerService';

export default {
  setup(props) {
    const store = useStore();
    const isLoading = ref(false);

    // Accessing customer state
    const editCustomer = computed(() => store.state.customers.editCustomer);

    const updateCustomer = async () => {
      await customerService.updateCustomer(editCustomer.value.id, editCustomer.value);

      // Reset the input fields
      store.commit('setEditCustomer', undefined);

      // refresh the customer list
      const customers = await customerService.getCustomers();
      store.commit('setCustomers', customers);
    };

    return { editCustomer, isLoading, updateCustomer };
  },
};
</script>
