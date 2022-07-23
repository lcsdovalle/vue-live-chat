<template>
  <div class="container mx-auto">
    <NavBar @logout="handleLogout" />
    <form>
      <text-area @send="handleNewMessage" />
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import getUser from "@/firebash/getUser";
import { ref, watch } from "@vue/runtime-core";
import TextArea from "@/components/TextArea.vue";
import useCollection from "@/firebash/useCollection";
export default {
  name: "ChatRoomView",
  components: { NavBar, TextArea },
  setup() {
    const { user } = getUser();
    const store = useStore();
    const router = useRouter();
    const { error, pushDoc } = useCollection("messages");
    const handleLogout = () => {
      store.commit("logout");
      router.push({ name: "home" });
    };
    watch(user, async () => {
      console.log(user);
      if (!user) {
        store.commit("logout");
      }
    });

    const handleNewMessage = async (message) => {
      /**
       * New message
       */
      const chatMessage = {
        name: user.value.displayName,
        message: message.value,
      };

      /**
       * Save new message on firebase
       */
      pushDoc(chatMessage).then((doc) => {
        console.log(doc);
      });
      console.log(chatMessage);
    };
    return { handleLogout, handleNewMessage };
  },
};
</script>

<style>
</style>