<template>
  <div class="customer-list">
    <h2>Customer List</h2>
    <div v-if="!isLoading && customers">
      <ul>
        <li v-for="customer in customers" :key="customer.id">
          <div class="info">
            <p><strong>ID:</strong> {{ customer.id }}</p>
            <p><strong>Name:</strong> {{ customer.name }}</p>
            <p><strong>Email:</strong> {{ customer.email }}</p>
            <p><strong>Mobile:</strong> {{ customer.mobile }}</p>
          </div>
          <button @click="editCustomer(customer)">Edit</button>
          <button @click="deleteCustomer(customer.id)">Delete</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p v-if="isLoading">Loading customer data...</p>
      <p v-else>No customer data found.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import customerService from '../scripts/Service/CustomerService';

export default defineComponent({
  setup() {
    const store = useStore();
    const isLoading = ref(false);

    // Accessing customer state
    const customers = computed(() => store.state.customers.customers);

    const deleteCustomer = async id => {
      await customerService.deleteCustomer(id);
      // refresh the customer list
      const customers = await customerService.getCustomers();
      store.commit('setCustomers', customers);
    };

    const editCustomer = customer => {
      store.commit('setEditCustomer', { ...customer });
    };

    onMounted(async () => {
      isLoading.value = true;
      // refresh the customer list
      const customers = await customerService.getCustomers();
      store.commit('setCustomers', customers);
      isLoading.value = false;
    });

    return { customers, deleteCustomer, editCustomer, isLoading };
  },
});
</script>
