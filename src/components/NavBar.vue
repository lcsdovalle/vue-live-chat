<template>
  <nav v-if="user" class="bg-teal-800 text-white">
    <div class="flex justify-between">
      <p>
        Fala <span class="font-bold">{{ user.displayName }}</span>
      </p>
      <span
        class="material-symbols-outlined cursor-pointer"
        @click="handleLogout"
      >
        logout
      </span>
    </div>
  </nav>
</template>

<script>
import useLogoutFirebase from "@/firebase/useLogout";
import getUser from "@/firebase/getUser";
import { useRouter } from "vue-router";
export default {
  setup(_, { emit }) {
    const router = useRouter();
    const { user } = getUser();
    const { error, logout } = useLogoutFirebase();
    const handleLogout = () => {
      logout();
      if (!error.value) emit("logout");
    };
    return { handleLogout, user };
  },
};
</script>

<style>
</style>