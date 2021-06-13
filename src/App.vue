<template>
  <div class="app dark:bg-gray-800 text-white">
    <div class="flex">
      <div class="mt-10">
        <profile v-if="isProfileCreated"></profile>
        <profile-form v-else></profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ProfileForm from "./components/profile-form.vue";
import Profile from "./components/profile.vue";

export default {
  components: {ProfileForm, Profile },
  name: "App",
  setup() {
    const store = useStore();

    return {
      firstname: "",
      lastname: "",
      email: "",
      occupation: "",

      isProfileCreated: computed(() => store.state.isProfileCreated),
    };
  },
};
</script>