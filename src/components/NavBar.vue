<template>
  <nav v-if="user">
    <div class="flex justify-between">
      <p>Hey there {{ user.displayName }}</p>
      <p
        @click="handleLogout"
        class="
          text-xs
          font-semibold
          text-gray-600
          border
          rounded-md
          p-1
          hover:text-white hover:bg-gray-800 hover:cursor-pointer
        "
      >
        Logout
      </p>
    </div>
  </nav>
</template>

<script>
import useLogoutFirebase from "@/firebash/useLogout";
import getUser from "@/firebash/getUser";
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