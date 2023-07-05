<script>
import { useStateHandle } from "@/composition-api/useStateHandle.js";
export default {
  setup() {
    const { loginState } = useStateHandle();
    return { loginState };
  },
};
</script>
<template>
  <div :class="['login', { active: loginState }]">
    <h1>Login Page</h1>
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: fixed;
  top: -100%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.3s;
  &.active {
    top: 50%;
  }
  h1 {
    color: rgba(#000, 0.5);
  }
}
</style>
