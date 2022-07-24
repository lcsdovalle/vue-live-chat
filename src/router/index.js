import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import WelcomeView from "@/views/WelcomeView";
import ChatRoomView from "@/views/ChatRoomView";

const guardAuth = (to, from, next) => {
  if (!getAuth().currentUser) {
    next({ name: "home" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  if (getAuth().currentUser) {
    next({ name: "chat-room" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: WelcomeView,
    beforeEnter: [requireNoAuth],
  },
  {
    path: "/chatroom",
    name: "chat-room",
    component: ChatRoomView,
    beforeEnter: guardAuth,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
