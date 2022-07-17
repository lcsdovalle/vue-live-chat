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
      <h1 class="text-center font-semibold text-xl text-slate-700">
        Criar uma conta
      </h1>
      <input
        class="p-1 mt-1 rounded-md border border-sm focus:outline-none"
        type="text"
        required
        placeholder="Nome e Sobrenome"
        v-model="displayName"
      />
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
      <button class="p-2 bg-slate-600 text-white text-sm rounded-lg mt-2">
        Sign Up
      </button>
      <br />
      <p>
        Já tem conta?
        <span
          class="text-teal-600 font-semibold cursor-pointer"
          @click.prevent="toggleForm"
          >Fazer login</span
        >
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useCreateAccountFirebase from "@/firebash/createAccountFirebase";
export default {
  setup(props, { emit }) {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const { error, register } = useCreateAccountFirebase();

    const handleSubmit = () => {
      console.log(displayName.value, email.value, password.value);
      register(email.value, password.value, displayName.value);
      console.log(error);
    };

    const toggleForm = () => emit("toggleForm");

    return { displayName, email, password, handleSubmit, toggleForm };
  },
};
</script>

<style>
</style>