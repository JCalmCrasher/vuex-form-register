<template>
  <div class="app">
    <div class="mt-20">
      <form method="post">
        <div class="flex flex-col reg-form">
          <div class="flex justify-center mb-5">
            <h1>Create your profile</h1>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="flex">
              <div class="flex flex-col space-y-2">
                <span>Firstname</span>
                <input type="text" />
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col space-y-2">
                <span>Lastname</span>
                <input type="text" />
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col space-y-2">
                <span>Email</span>
                <input type="text" />
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col space-y-2">
                <span>Occupation</span>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>