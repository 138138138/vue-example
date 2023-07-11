'use strict';

import { createStore } from 'vuex';
import customers from './customers';

const store = createStore({
  modules: {
    customers,
  },
});

export default store;
