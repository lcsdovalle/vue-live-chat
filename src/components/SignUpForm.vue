<template>
  <div class="container m-auto md:h-screen md:w-screen md:flex rounded-lg p-2">
    <div
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
      <button
        class="p-2 bg-slate-600 text-white text-sm rounded-lg mt-2"
        :class="loading"
        @click.prevent="handleSubmit"
      >
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
      <p class="text-red-500 mt-2" v-if="error">{{ error }}</p>
      <p class="text-teal-500 mt-2" v-show="accountCreated">
        Conta criada com sucesso. Realize o login!
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useCreateAccountFirebase from "@/firebase/useCreateAccount";
import { computed } from "@vue/runtime-core";
export default {
  setup(props, { emit }) {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const { error, register } = useCreateAccountFirebase();
    const accountCreated = ref(false);
    const disableBtn = ref(false);
    const loading = computed(() => {
      return {
        "base-spinner": disableBtn.value,
        "cursor-not-allowed": disableBtn.value,
        "inline-block text-center rounded font-semibold border-2 border-transparent px-4 min-h-10": true,
        "cursor-pointer": !disableBtn.value,
      };
    });

    const handleSubmit = () => {
      disableBtn.value = true;
      error.value = null;
      register(email.value, password.value, displayName.value)
        .then(() => {
          if (!error.value) {
            // emit("signUp");
            accountCreated.value = true;
          }
          disableBtn.value = false;
        })
        .catch((er) => {
          disableBtn.value = false;
        });
    };

    const toggleForm = () => emit("toggleForm");

    return {
      displayName,
      email,
      password,
      handleSubmit,
      toggleForm,
      error,
      accountCreated,
      loading,
    };
  },
};
</script>

<style>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.base-spinner {
  position: relative;
  overflow: hidden;
}
.base-spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}
.base-spinner:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}
</style>