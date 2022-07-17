<template>
  <div v-if="showLogin">
    <log-in-form @toggleForm="showLogin = !showLogin" />
  </div>
  <div v-else>
    <sign-up-form @toggleForm="showLogin = !showLogin" />
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import LogInForm from "@/components/LogInForm.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { SignUpForm, LogInForm },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>

<style>
</style>