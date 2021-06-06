<template>
  <form method="post" @submit="submitProfile">
    <div class="flex flex-col reg-form">
      <div class="flex justify-center mb-5">
        <h1>Create your profile</h1>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex">
          <vuex-input inputText="Firstname" v-model="firstname" />
        </div>
        <div class="flex">
          <vuex-input inputText="Lastname" v-model="lastname" />
        </div>
        <div class="flex">
          <vuex-input inputText="Email" inputType="email" v-model="email" />
        </div>
        <div class="flex">
          <vuex-input inputText="Occupation" v-model="occupation" />
        </div>
        <div class="flex">
          <button
            type="submit"
            class="px-3 py-3 my-3 rounded-md w-full hover:bg-gray-700"
            :class="defaultBtnColor"
          >
            Create my profile
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import VuexInput from "./vuex-input.vue";
export default {
  components: { VuexInput },
  name: "ProfileForm",
  setup() {
    const store = useStore();

    return {
      firstname: "",
      lastname: "",
      email: "",
      occupation: "",

      defaultBtnColor: computed(() => store.state.selectedBtnColor),
    };
  },
  methods: {
    submitProfile() {
      const store = useStore();
      store.dispatch("user/setFirstName", this.firstname);
      store.dispatch("user/setLastName", this.lastname);
      store.dispatch("user/setEmail", this.email);
      store.dispatch("user/setOccupation", this.occupation);
    },
  },
};
</script>

<style>
</style>