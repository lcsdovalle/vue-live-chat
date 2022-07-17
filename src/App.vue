<template>
  <!-- <nav><router-link to="/">Home</router-link> |</nav> -->
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap");
#app {
  font-family: "Roboto", sans-serif;
}
body {
  background: #eff1f4ac;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
