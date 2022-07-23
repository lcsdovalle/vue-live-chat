<template>
  <form>
    <div
      class="
        w-full
        md:w-4/6 md:ml-7
        bg-gray-50
        rounded-lg
        border border-gray-200
      "
    >
      <div class="py-2 px-4 bg-white rounded-t-lg">
        <textarea
          v-model="message"
          @keypress.enter.prevent="sendMessage"
          id="comment"
          rows="4"
          class="
            px-0
            w-full
            border-0
            outline-slate-200 outline-hidden
            dark:text-gray-500 dark:placeholder-gray-400
          "
          placeholder="Sua mensagem"
          required=""
        ></textarea>
      </div>
      <div class="flex justify-between items-center py-2 px-3 border-t">
        <button
          type="submit"
          @click.prevent="sendMessage"
          class="
            inline-flex
            items-center
            py-2.5
            px-4
            text-xs
            font-medium
            text-center text-white
            bg-blue-700
            rounded-lg
            focus:ring-4 focus:ring-blue-200
            dark:focus:ring-blue-900
            hover:bg-blue-800
          "
        >
          Enviar
        </button>
        <div class="flex pl-0 space-x-1 sm:pl-2" v-if="showIcons">
          <button
            type="button"
            class="
              inline-flex
              justify-center
              p-2
              text-gray-500
              rounded
              cursor-pointer
              hover:text-gray-900 hover:bg-gray-100
              dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Attach file</span>
          </button>
          <button
            type="button"
            class="
              inline-flex
              justify-center
              p-2
              text-gray-500
              rounded
              cursor-pointer
              hover:text-gray-900 hover:bg-gray-100
              dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Set location</span>
          </button>
          <button
            type="button"
            class="
              inline-flex
              justify-center
              p-2
              text-gray-500
              rounded
              cursor-pointer
              hover:text-gray-900 hover:bg-gray-100
              dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Upload image</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "TextArea",
  emits: ["send"],
  setup({ showIcons }, { emit }) {
    const message = ref("");
    const sendMessage = () => {
      emit("send", message);
      message.value = "";
    };

    return { showIcons, sendMessage, message };
  },
};
</script>

<style>
</style>