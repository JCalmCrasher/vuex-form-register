<template>
  <div
    class="
      flex flex-col
      mt-3
      px-4
      py-2
      border-solid border-2
      rounded-md
      border-gray-500
      pb-5
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ProfileWrapper",
};
</script>

<style>
</style>