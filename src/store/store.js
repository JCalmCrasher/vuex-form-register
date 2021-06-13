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

        darkModeColor: 'dark:bg-gray-800 text-white',
        lightModeColor: "bg-white text-black",

        darkModeBtnColor: 'bg-gray-600 text-white',
        lightModeBtnColor: "dark:bg-gray-800 text-white",
        selectedBtnColor: "bg-gray-600 text-white",

        selectedColor: 'dark:bg-gray-800 text-white'
    },
    actions: {
        setProfileStatus({
            commit
        }, status) {
            commit('PROFILE_STATUS', status)
        },
        toggleMainColor({
            state,
            dispatch,
            commit
        }) {
            if (state.selectedColor === state.darkModeColor) {
                commit('TOGGLE_MAIN_COLOR', state.lightModeColor);
                return dispatch('toggleBtnColor', state.lightModeBtnColor)
            }
            commit('TOGGLE_MAIN_COLOR', state.darkModeColor);
            dispatch('toggleBtnColor', state.darkModeBtnColor)
        },
        toggleBtnColor({
            state,
            commit
        }) {
            if (state.selectedBtnColor === state.darkModeColor) {
                return commit('TOGGLE_BTN_COLOR', state.lightModeBtnColor);
            }
            commit('TOGGLE_BTN_COLOR', state.darkModeBtnColor);
        },
    },
    mutations: {
        PROFILE_STATUS(state, status) {
            state.isProfileCreated = status
        },
        TOGGLE_MAIN_COLOR(state, color) {
            // TODO: implement theme on LS
            // localStorage.setItem('theme', color)
            state.selectedColor = color
        },
        TOGGLE_BTN_COLOR(state, color) {
            state.selectedBtnColor = color
        },
    },
    getters: {
        selectedColor: state => {
            return state.selectedColor;
        },
        darkMode: state => {
            return state.darkModeColor;
        },
        lightMode: state => {
            return state.lightModeColor;
        },
    }
});

export {
    store
};