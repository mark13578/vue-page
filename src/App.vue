<script>
export default {
  name: "App",
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <nav>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav > a {
  margin: 0 20px;
}
img {
  width: 100px;
}
</style>
