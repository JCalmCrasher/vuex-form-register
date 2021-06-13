<template>
  <div class="flex flex-col space-y-2">
    <span>{{ inputText }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VuexInput",
  props: {
    inputText: { type: String, required: true },
  },
};
</script>