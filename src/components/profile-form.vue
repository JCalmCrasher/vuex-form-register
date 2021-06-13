<template>
  <form method="post" @submit.prevent="submitProfile">
    <div class="flex flex-col reg-form">
      <div class="flex justify-center mb-5">
        <h1>Create your profile</h1>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex">
          <vuex-input inputText="Firstname">
            <input class="input text-black" required v-model="firstname" />
          </vuex-input>
        </div>
        <div class="flex">
          <vuex-input inputText="Lastname">
            <input class="input text-black" required v-model="lastname" />
          </vuex-input>
        </div>
        <div class="flex">
          <vuex-input inputText="Email">
            <input
              class="input text-black"
              required
              v-model="email"
              type="email"
            />
          </vuex-input>
        </div>
        <div class="flex">
          <vuex-input inputText="Occupation">
            <input class="input text-black" required v-model="occupation" />
          </vuex-input>
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
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import VuexInput from "./vuex-input.vue";
export default {
  components: { VuexInput },
  name: "ProfileForm",
  setup() {
    const store = useStore();

    onMounted(store);

    return {
      store,
      firstname: "",
      lastname: "",
      email: "",
      occupation: "",

      defaultBtnColor: computed(() => store.state.selectedBtnColor),
    };
  },
  methods: {
    submitProfile() {
      this.store.dispatch("user/setFirstName", this.firstname);
      this.store.dispatch("user/setLastName", this.lastname);
      this.store.dispatch("user/setEmail", this.email);
      this.store.dispatch("user/setOccupation", this.occupation);

      this.store.dispatch("setProfileStatus", true);
    },
  },
};
</script>

<style>
.input {
  @apply border border-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md sm:w-96 md:w-96 lg:w-96 w-72 py-2 px-2;
}
</style>