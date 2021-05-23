import {
    createStore
} from 'vuex'

const store = createStore({
    strict: true,
    state: {
        darkModeColor: 'dark:bg-gray-800 text-white',
        lightModeColor: "bg-white text-black",
        selectedColor: 'dark:bg-gray-800 text-white'
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

export {
    store
};