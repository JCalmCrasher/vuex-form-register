export const namespaced = true;

export const state = {
    firstname: '',
    lastname: '',
    email: '',
    occupation: '',
};

export const actions = {
    setFirstName({
        commit
    }, fname) {
        commit('FIRSTNAME', fname);
    },
    setLastName({
        commit
    }, lname) {
        commit('LASTNAME', lname);
    },
    setEmail({
        commit
    }, email) {
        commit('EMAIL', email);
    },
    setOccupation({
        commit
    }, occupation) {
        commit('OCCUPATION', occupation);
    },
};

export const mutations = {
    FIRSTNAME(state, val) {
        state.firstname = val
    },
    LASTNAME(state, val) {
        state.lastname = val
    },
    EMAIL(state, val) {
        state.email = val
    },
    OCCUPATION(state, val) {
        state.occupation = val
    },
};

export const getters = {};