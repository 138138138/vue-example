<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />
        <q-toolbar-title>Vue Demo</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <AddCustomer />
        <CustomerList />
        <EditCustomer />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AddCustomer from './components/AddCustomer.vue';
import CustomerList from './components/CustomerList.vue';
import EditCustomer from './components/EditCustomer.vue';

export default defineComponent({
  name: 'App',
  components: {
    AddCustomer,
    CustomerList,
    EditCustomer,
  },
});
</script>
