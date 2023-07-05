<script>
import { useStateHandle } from "@/composition-api/useStateHandle.js";
export default {
  setup() {
    const { menuState, stateHandle } = useStateHandle();

    return { menuState, stateHandle };
  },
};
</script>
<template>
  <div :class="['slid_menu', { active: menuState }]">
    <a class="close" @click="stateHandle('handleMenuState', false)">
      <img src="../assets/close.png" alt="" />
    </a>
    <nav>
      <a>ABOTU</a>
      <a>ADDRESS</a>
      <a>USER</a>
      <a>STRENGTH</a>
      <a>SERVICE</a>
      <a>COMPANY</a>
      <a>RECRUIT</a>
      <a>CONTACT</a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
.slid_menu {
  position: fixed;
  top: 0;
  right: -300px;
  background-color: #fff;
  width: 300px;
  height: 100%;
  padding-top: 100px;
  transition: right 0.3s;
  &.active {
    right: 0;
    box-shadow: -2px 0 5px #35495d;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    width: 30px;
    height: 30px;
    > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    width: 150px;
    margin: 0 auto;
    > a {
      margin-bottom: 10px;
      transition: color 0.2s;
      line-height: 24px;
      color: #35495d;
      &:hover {
        color: #4eb883;
      }
    }
  }
}
</style>
