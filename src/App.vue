<template>
  <color-toggler />
  <div class="app" :class="darkMode">
    <div class="flex">
      <div class="mt-10">
        <form method="post">
          <div class="flex flex-col reg-form">
            <div class="flex justify-center mb-5">
              <h1>Create your profile</h1>
            </div>
            <div class="flex flex-col space-y-2">
              <div class="flex">
                <vuex-input inputText="Firstname" />
              </div>
              <div class="flex">
                <vuex-input inputText="Lastname" />
              </div>
              <div class="flex">
                <vuex-input inputText="Email" inputType="email" />
              </div>
              <div class="flex">
                <vuex-input inputText="Occupation" inputType="email" />
              </div>
              <div class="flex">
                <button
                  type="submit"
                  class="bg-gray-600 px-3 py-3 my-3 rounded-md w-full hover:bg-gray-700"
                >
                  Create my profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VuexInput from "./components/vuex-input.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import ColorToggler from "./components/color-toggler.vue";
export default {
  components: { VuexInput, ColorToggler },
  name: "App",
  setup() {
    const store = useStore();
    return {
      darkMode: computed(() => store.state.darkModeColor),
      lightMode: computed(() => store.state.lightModeColor),
    };
  },
};
</script>