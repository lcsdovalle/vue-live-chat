<template>
  <div class="container m-auto h-screen w-screen flex rounded-lg p-2">
    <form
      @submit.prevent="handleSubmit"
      class="
        grid
        container
        m-auto
        rounded-md
        p-5
        w-auto
        h-96
        md:h-96 md:w-96
        bg-white
      "
    >
      <h1 class="text-center font-semibold text-xl text-slate-700">Entrar</h1>
      <input
        class="p-1 mt-1 rounded-md border border-sm focus:outline-none"
        type="email"
        required
        placeholder="E-mail"
        v-model="email"
      />
      <input
        class="p-1 mt-1 rounded-md border border-sm focus:outline-none"
        type="password"
        required
        placeholder="Senha"
        v-model="password"
      />
      <button
        @click.prevent="handleSubmit"
        class="p-2 bg-slate-600 text-white text-sm rounded-lg mt-2"
      >
        Log In
      </button>
      <br />
      <p>
        Ainda não tem uma conta?
        <span
          class="text-teal-600 font-semibold cursor-pointer"
          @click.prevent="toggleForm"
          >Cadastre-se</span
        >
      </p>
      <p class="text-red-500 mt-2" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLoginFirebase from "@/firebash/useLogin";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import getUser from "@/firebash/getUser";
export default {
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const showLogin = ref(true);
    const { error, login } = useLoginFirebase();

    const handleSubmit = () => {
      login(email.value, password.value);
      if (!error.value) {
        store.commit("login", getUser().user);
        router.push({ name: "chat-room" });
      }
    };
    const toggleForm = () => emit("toggleForm");

    return { email, password, handleSubmit, showLogin, toggleForm, error };
  },
};
</script>

<style>
</style>