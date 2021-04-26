import Vue from 'vue';
import Vuex from 'vuex';

import { getField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        email: [],
    },

    getters: {
        getField,
    },
    mutations: {
        updateEmail(state, newEmail) {
            state.email.push(newEmail);
        },
    },
    actions: {
        addEmail(state, payload) {
            state.commit('updateEmail', payload);
        },
    },
});

console.log(Vuex.store);
