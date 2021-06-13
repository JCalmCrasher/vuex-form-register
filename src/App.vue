<template>
  <color-toggler />
  <div class="app" :class="defaultColor">
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
import ColorToggler from "./components/color-toggler.vue";
import ProfileForm from "./components/profile-form.vue";
import Profile from "./components/profile.vue";

export default {
  components: { ColorToggler, ProfileForm, Profile },
  name: "App",
  setup() {
    const store = useStore();

    return {
      firstname: "",
      lastname: "",
      email: "",
      occupation: "",

      defaultColor: computed(() => store.state.selectedColor),
      isProfileCreated: computed(() => store.state.isProfileCreated),
    };
  },
};
</script>