import {
    useStore
} from "vuex";

export function themeColor() {
    const store = useStore();
    let theme = localStorage.getItem('theme');

    if (!theme) {
        localStorage.setItem('theme', store.getters.darkMode);
        return theme = store.getters.darkMode;
    }

    return theme;
}