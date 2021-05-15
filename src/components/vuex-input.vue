<template>
  <div class="flex flex-col space-y-2">
    <span>{{ inputText }}</span>
    <input :type="type" class="input" required />
  </div>
</template>

<script>
export default {
  name: "VuexInput",
  props: {
    inputText: { type: String, required: true },
    inputType: { type: String, default: "text" },
  },
};
</script>

<style>
.input {
  @apply border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md sm:w-96 md:w-96 lg:w-96 w-72 py-2 px-2;
}
</style>