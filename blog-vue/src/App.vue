<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "../node_modules/font-awesome/css/font-awesome.css";
[class^="el-icon-fa"],
[class*=" el-icon-fa"] {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome !important;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

$fa-css-prefix: el-icon-fa;
</style>
