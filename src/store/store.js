import {
    createStore
} from 'vuex';

import * as user from '../modules/user';

const store = createStore({
    strict: true,
    modules: {
        user
    },
    state: {
        isProfileCreated: false,
        btnStyle: "border border-solid border-gray-600 hover:bg-gray-700",

    },
    actions: {
        setProfileStatus({
            commit
        }, status) {
            commit('PROFILE_STATUS', status)
        },
    },
    mutations: {
        PROFILE_STATUS(state, status) {
            state.isProfileCreated = status
        },
    },
});

export {
    store
};