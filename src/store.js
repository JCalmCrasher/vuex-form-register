import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        darkModeColor: 'dark:bg-gray-800 text-white',
        lightModeColor: "bg-white text-black",
        selectedColor: null
    },
    actions: {
        toggleColor({
            commit
        }, color) {
            commit('TOGGLE_COLOR', color);
        }
    },
    TOGGLE_COLOR(state, color) {
        state.selectedColor = color
    },
    getters: {
        selectedColor: state => {
            return state.selectedColor;
        }
    }
});