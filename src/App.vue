<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
html {
  --scrollbarBG: #cfd8dc;
  --thumbBG: #90a4ae;
}
body::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 350px;
  min-height: 427px;
  margin: 0 auto;
  background: linear-gradient(
    to bottom right,
    rgba(145, 100, 255, 0.2) 0%,
    rgba(139, 255, 244, 0.2) 100%
  );
}

.fullheight {
  height: 100vh;
  display: flex;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
