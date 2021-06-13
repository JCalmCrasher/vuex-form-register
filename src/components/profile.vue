<template>
  <div class="mt-5 px-3 py-3">
    <div class="space-y-5">
      <profile-wrapper>
        <h1 class="border-b border-gray-500 pb-2">My Profile</h1>
        <div class="flex space-x-2 mt-3">
          <span>Name:</span>
          <span class="font-bold">{{ `${firstname} ${lastname}` }}</span>
        </div>
        <div class="flex space-x-2 mt-3">
          <span>Email:</span>
          <span class="font-bold">{{ email }}</span>
        </div>
        <div class="flex space-x-2 mt-3">
          <span>Occupation:</span>
          <span class="font-bold">{{ occupation }}</span>
        </div></profile-wrapper
      >
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ProfileWrapper from "./profile-wrapper.vue";
export default {
  components: { ProfileWrapper },
  name: "Profile",
  setup() {
    const store = useStore();

    return {
      firstname: computed(() => store.state.user.firstname),
      lastname: computed(() => store.state.user.lastname),
      email: computed(() => store.state.user.email),
      occupation: computed(() => store.state.user.occupation),
    };
  },
};
</script>

<style>
</style>