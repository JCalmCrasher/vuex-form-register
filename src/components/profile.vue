<template>
  <div class="mt-5">
    <h1>My Profile</h1>
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
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
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