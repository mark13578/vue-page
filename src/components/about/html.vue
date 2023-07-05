<script>
export default {
  setup() {
    const html = `
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    `;
    return {
      html,
    };
  },
};
</script>

<template>
  <pre v-text="html"></pre>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
pre {
  width: 80%;
  max-height: 200px;
  text-align: left;
  background-color: #ddd;
  padding: 10px 0;
}
</style>