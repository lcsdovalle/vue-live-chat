<template>
  <div v-if="showLogin">
    <log-in-form @toggleForm="showLogin = !showLogin" />
  </div>
  <div v-else>
    <sign-up-form @toggleForm="showLogin = !showLogin" @signUp="signUp" />
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import LogInForm from "@/components/LogInForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  components: { SignUpForm, LogInForm },
  setup() {
    const router = useRouter();
    const showLogin = ref(true);
    const signUp = () => {
      router.push({ name: "chat-room" });
    };
    return { showLogin, signUp };
  },
};
</script>

<style>
</style>