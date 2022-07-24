<template>
  <div
    class="bg-gray-200 p-3 rounded-md border overflow-scroll h-96"
    ref="msgWindow"
  >
    <p class="text-red-500 mt-2" v-if="error">{{ error }}</p>
    <div
      v-for="doc in formattedDocs"
      :key="doc.id"
      class="m-2 flex"
      :class="{ 'justify-end': doc.myself, 'items-start': doc.myself }"
    >
      <div class="">
        <p class="text-xs text-slate-400">({{ doc.createdAt }})</p>
        <p class="text-sm">
          <span class="font-bold mr-3">{{ !doc.myself ? doc.name : "Eu" }}</span
          >{{ doc.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/firebase/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";
import getUser from "@/firebase/getUser";
export default {
  setup() {
    const { user } = getUser();
    const { error, documents } = getCollection("messages");
    const formattedDocs = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          let position = doc.name === user.value.displayName ?? false;
          return { ...doc, createdAt: time, myself: position };
        });
      }
    });

    /**
     * Auto scroll
     */
    const msgWindow = ref(null);
    onUpdated(() => {
      msgWindow.value.scrollTop = msgWindow.value.scrollHeight;
    });
    return { error, formattedDocs, msgWindow };
  },
};
</script>

<style>
</style>