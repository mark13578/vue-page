
<script>
export default {};
</script>
<template>
  <h1>about</h1>
  <div class="tab_box">
    <nav>
      <router-link to="/about/">html</router-link>
      <router-link to="/about/css">css</router-link>
      <router-link to="/about/js">js</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
/* .router-link-active {
  background-color: #498ba7;
} */
</style>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.tab_box {
  width: 400px;
  height: 300px;
  background-color: slategrey;
  margin: 0 auto;
  > nav {
    width: 100%;
    height: 30px;
    display: flex;
    border: 3px solid #498ba7;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.333%;
      height: 30px;
      background-color: wheat;
      text-decoration: none;
      color: #498ba7;
      text-transform: uppercase;

      &.router-link-exact-active {
        color: #fff;
        background-color: #498ba7;
      }

      &:hover {
        color: #fff;
        background-color: #498ba7;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 270px;
  }
}
</style>