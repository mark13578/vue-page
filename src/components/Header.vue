<script>
import { useStateHandle } from "@/composition-api/useStateHandle.js";
export default {
  setup() {
    const { loginState, menuState, stateHandle } = useStateHandle();

    return {
      loginState,
      menuState,
      stateHandle,
    };
  },
};
</script>

<template>
  <header>
    <nav>
      <a @click="stateHandle('handleMenuState', !menuState)">Menu</a>
      <a @click="stateHandle('handleLoginState', !loginState)">Login</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  background-color: #4eb883;
  padding-left: 30px;
  nav {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    a {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 100%;
      color: #fff;
      font-size: 14px;
      margin-right: 10px;
      transition: background 0.1s;
      &:hover {
        background-color: #35495d;
      }
    }
  }
}
</style>
