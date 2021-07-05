<!--<template>-->
<!--  <div class="index">-->
<!--    <div class="wrapper">-->
<!--      <header class="header">-->
<!--        <div class="logo">-->
<!--          <span class="fa fa-rocket"> </span>-->
<!--        </div>-->
<!--        <div class="content">-->
<!--          <div class="inner">-->
<!--            <h1>ZC-CLOUD</h1>-->
<!--            <p>学习是一种习惯一种态度</p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <nav>-->
<!--          <ul>-->
<!--            <li><a href="javascript::;">说明</a></li>-->
<!--            <li><router-link to="/login">登录</router-link></li>-->
<!--            <li><router-link to="/register">注册</router-link></li>-->
<!--          </ul>-->
<!--        </nav>-->
<!--      </header>-->
<!--      <footer>-->
<!--        <p class="copy-right">©2020 ZC-CLOUD</p>-->
<!--      </footer>-->
<!--    </div>-->
<!--    <div class="bg"></div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "index",-->
<!--  data() {-->
<!--    return {};-->
<!--  },-->
<!--  mounted() {},-->
<!--  methods: {},-->
<!--};-->
<!--</script>-->

<!--<style lang='scss' scoped>-->
<!--@import "./../assets/scss/mixin.scss";-->
<!--@import "./../assets/scss/config.scss";-->
<!--@import "./../assets/scss/animate.scss";-->

<!--.index {-->
<!--  .wrapper {-->
<!--    @include flex(space-around, center, column);-->
<!--    height: 100vh;-->
<!--    width: 100%;-->
<!--    padding: 3rem 2rem;-->
<!--  }-->
<!--  header {-->
<!--    @include flex(space-around, center, column);-->
<!--    text-align: center;-->
<!--    animation: indexAnimate 2s ease;-->
<!--    .logo {-->
<!--      width: 5.5rem;-->
<!--      height: 5.5rem;-->
<!--      border-radius: 100%;-->
<!--      line-height: 5.5rem;-->
<!--      border: 1px solid $colorG;-->
<!--      @include flex(space-around, center, column);-->
<!--      font-size: 2rem;-->
<!--      color: $colorG;-->
<!--    }-->
<!--    .content {-->
<!--      position: relative;-->
<!--      margin: 3.5rem 0;-->
<!--      &:before {-->
<!--        content: "";-->
<!--        display: block;-->
<!--        position: absolute;-->
<!--        top: calc(-3.5rem - 1px);-->
<!--        left: calc(50% - 1px);-->
<!--        width: 1px;-->
<!--        height: calc(3.5rem + 1px);-->
<!--        background: $colorG;-->
<!--      }-->
<!--      .inner {-->
<!--        border-top: 1px solid $colorG;-->
<!--        border-bottom: 1px solid $colorG;-->
<!--        color: $colorG;-->
<!--        h1 {-->
<!--          font-size: 1.8rem;-->
<!--          line-height: 1.3;-->
<!--          letter-spacing: 0.5rem;-->
<!--        }-->
<!--        p {-->
<!--          letter-spacing: 0.2rem;-->
<!--          font-size: 0.7rem;-->
<!--          line-height: 2;-->
<!--          //   font: inherit;-->
<!--        }-->
<!--        padding: 3rem 2rem;-->
<!--        transition: max-height 10.75s ease, padding 0.75s ease,-->
<!--          opacity 0.325s ease-in-out;-->
<!--        transition-delay: 0.25s;-->
<!--        overflow: hidden;-->
<!--        animation: indexOut 1s ease-in-out;-->
<!--      }-->
<!--      .indexAnimation {-->
<!--        max-height: 40rem;-->
<!--        padding: 3rem 2rem;-->
<!--      }-->

<!--      //   &:after {-->
<!--      //     content: "";-->
<!--      //     display: block;-->
<!--      //     position: absolute;-->
<!--      //     bottom: calc(-3.5rem - 1px);-->
<!--      //     left: calc(50% - 1px);-->
<!--      //     width: 1px;-->
<!--      //     height: calc(3.5rem + 1px);-->
<!--      //     background: $colorG;-->
<!--      //   }-->
<!--    }-->
<!--    z-index: 9;-->
<!--    nav {-->
<!--      position: relative;-->
<!--      &:before {-->
<!--        content: "";-->
<!--        display: block;-->
<!--        position: absolute;-->
<!--        top: calc(-3.5rem - 1px);-->
<!--        left: calc(50% - 1px);-->
<!--        width: 1px;-->
<!--        height: calc(3.5rem + 1px);-->
<!--        background: $colorG;-->
<!--      }-->
<!--      ul {-->
<!--        border: 1px solid $colorG;-->
<!--        display: flex;-->
<!--        li {-->
<!--          border-right: 1px solid $colorG;-->
<!--          a {-->
<!--            display: block;-->
<!--            min-width: 7.5rem;-->
<!--            height: 2.75rem;-->
<!--            line-height: 2.75rem;-->
<!--            padding: 0 1.25rem 0 1.45rem;-->
<!--            font-size: 0.8rem;-->
<!--            border-bottom: 0;-->
<!--          }-->
<!--        }-->
<!--        &:last-child {-->
<!--          border-right: 0;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  footer {-->
<!--    display: block;-->
<!--    z-index: 10;-->
<!--    transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,-->
<!--      opacity 0.325s ease-in-out;-->
<!--    width: 100%;-->
<!--    max-width: 100%;-->
<!--    margin-top: 2rem;-->
<!--    text-align: center;-->
<!--    color: $colorG;-->
<!--    .copy-right {-->
<!--      letter-spacing: 0.2rem;-->
<!--      font-size: 0.6rem;-->
<!--      opacity: 0.75;-->
<!--      margin-bottom: 0;-->
<!--      text-transform: uppercase;-->
<!--    }-->
<!--  }-->
<!--  .bg {-->
<!--    z-index: 1;-->
<!--    position: fixed;-->
<!--    top: 0;-->
<!--    left: 0;-->
<!--    width: 100%;-->
<!--    height: 100vh;-->

<!--    &:before {-->
<!--      content: "";-->
<!--      @include position();-->
<!--      background-image: linear-gradient(-->
<!--          to top,-->
<!--          rgba(19, 21, 25, 0.5),-->
<!--          rgba(19, 21, 25, 0.5)-->
<!--        ),-->
<!--        url(../assets/images/overlay.jpg);-->
<!--      //   background-size: auto, 256px 256px;-->
<!--      background-position: center, center;-->
<!--      //   transition: background-color 2.5s ease-in-out;-->
<!--      //   transition-delay: 0.75s;-->
<!--      background-repeat: no-repeat, repeat;-->
<!--      z-index: 2;-->
<!--      animation: backgroudAnimate 2.5s ease-in-out;-->
<!--      animation-delay: 0.75s;-->
<!--      animation-fill-mode: forwards;-->
<!--    }-->
<!--    &:after {-->
<!--      content: "";-->
<!--      @include position();-->
<!--      background: url(../assets/images/bg.jpg) no-repeat center;-->
<!--      background-repeat: no-repeat;-->
<!--      background-position: center;-->
<!--      background-size: cover;-->
<!--      z-index: 1;-->
<!--      animation: transformAnimate 1s ease-in-out;-->
<!--      animation-fill-mode: forwards;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
