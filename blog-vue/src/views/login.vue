<!--<template>-->
<!--<div>-->
<!--  <div class="login">-->
<!--    &lt;!&ndash; 顶部logo &ndash;&gt;-->
<!--    <el-row type="flex" class="logo" justify="center">-->
<!--      <el-col :xl="{ span: 4, offset: 0 }">-->
<!--        <div class="wrapper">-->
<!--          <img-->
<!--            class="shadow-light"-->
<!--            src="../assets/images/favicon.svg"-->
<!--            alt="logo"-->
<!--          />-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    &lt;!&ndash; 表单 &ndash;&gt;-->
<!--    <el-row :gutter="30" class="row-bg">-->
<!--      <el-col-->
<!--        :xs="{ span: 22, offset: 1 }"-->
<!--        :sm="{ span: 8, offset: 8 }"-->
<!--        :md="{ span: 6, offset: 9 }"-->
<!--        :lg="{ span: 5, offset: 10 }"-->
<!--        :xl="{ span: 4, offset: 10 }"-->
<!--        class="main-form"-->
<!--      >-->
<!--        <div class="header">-->
<!--          <p>登录</p>-->
<!--        </div>-->
<!--        <el-form-->
<!--          :label-position="labelPosition"-->
<!--          label-width="80px"-->
<!--          :model="formLabelAlign"-->
<!--        >-->
<!--          <el-form-item label="邮箱">-->
<!--            <el-input v-model="formLabelAlign.region"> </el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="密码">-->
<!--            <el-input v-model="formLabelAlign.type"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--        &lt;!&ndash; 七天内免登录 &ndash;&gt;-->
<!--        <div class="service-wrapper">-->
<!--          <ul>-->
<!--            <li><el-checkbox v-model="checked"></el-checkbox></li>-->
<!--            <li>七天内免登录</li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        &lt;!&ndash; login &ndash;&gt;-->
<!--        <el-button-->
<!--          class="button-bg-color login-button"-->
<!--          style="width: 100%; margin-bottom: 2rem"-->
<!--          round @click="jump"-->
<!--          >登录</el-button-->
<!--        >-->
<!--        <div></div>-->
<!--        <el-button-->
<!--          class="tg-button"-->
<!--          style="width: 100%; margin-bottom: 2rem"-->
<!--          round-->
<!--        >-->
<!--          <i class="fa fa-paper-plane"></i> 使用 Telegram 登录</el-button-->
<!--        >-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <el-row :gutter="30" class="regiser">-->
<!--      还没有账号？ <a href="/#/register">马上注册 👉</a>-->
<!--    </el-row>-->
<!--    <el-row :gutter="10" class="simple-footer">-->
<!--      Copyright © 2019 ZC-Cloud-->
<!--      <div class="copyright">-->
<!--        Powered by <a href="javascript::;">SSPANEL</a>-->
<!--        <div class="bullet"></div>-->
<!--      </div>-->
<!--    </el-row>-->
<!--  </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  components:{-->
<!--  },-->
<!--  name: "login",-->
<!--  data() {-->
<!--    return {-->
<!--      labelPosition: "top",-->
<!--      formLabelAlign: {-->
<!--        name: "",-->
<!--        region: "",-->
<!--        type: "",-->
<!--      },-->
<!--      options: [-->
<!--        {-->
<!--          value: "1",-->
<!--          label: "@gmail",-->
<!--        },-->
<!--        {-->
<!--          value: "2",-->
<!--          label: "@qq.com",-->
<!--        },-->
<!--        {-->
<!--          value: "3",-->
<!--          label: "@outlook.com",-->
<!--        },-->
<!--        {-->
<!--          value: "4",-->
<!--          label: "@163.com",-->
<!--        },-->
<!--        {-->
<!--          value: "@126.com",-->
<!--          label: "@126.com",-->
<!--        },-->
<!--        {-->
<!--          value: "@yeah.net",-->
<!--          label: "@yeah.net",-->
<!--        },-->
<!--        {-->
<!--          value: "@foxmail.com",-->
<!--          label: "@foxmail.com",-->
<!--        },-->
<!--      ],-->
<!--      value: "",-->
<!--      checked: "false",-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    jump(){-->
<!--      this.$router.push({path: '/index/blogIndex'})-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--body {-->
<!--  background-color: #f4f6f9;-->
<!--}-->
<!--.login {-->
<!--    height: 100vh;-->
<!--  .logo {-->
<!--    .shadow-light {-->
<!--      margin-top: 3rem;-->
<!--      box-shadow: 0 2px 6px #e6ecf1;-->
<!--      border-radius: 50% !important;-->
<!--      width: 100px;-->
<!--      height: 100px;-->
<!--    }-->
<!--    .wrapper {-->
<!--      text-align: center;-->
<!--    }-->
<!--    margin-bottom: 2.5rem;-->
<!--  }-->
<!--  .main-form {-->
<!--    padding-right: 15px;-->
<!--    padding-left: 15px;-->
<!--    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);-->
<!--    background-color: #fff;-->
<!--    border-radius: 3px;-->
<!--    border: none;-->
<!--    border-top: 2px solid #6777ef;-->
<!--    .header {-->
<!--      font-weight: 700;-->
<!--      font-size: 16px;-->
<!--      color: #6777ef;-->
<!--      padding-right: 10px;-->
<!--      margin-bottom: 20px;-->
<!--      border-bottom: 1px solid #f9f9f9;-->
<!--      height: 70px;-->
<!--      line-height: 70px;-->
<!--    }-->
<!--    .service-wrapper {-->
<!--      font-size: 14px;-->
<!--      font-weight: 400;-->
<!--      font-family: "Nunito", "Segoe UI", arial;-->
<!--      color: #6c757d;-->
<!--      margin-bottom: 1rem;-->
<!--      ul > li {-->
<!--        display: inline-block;-->
<!--        margin-right: 6px;-->
<!--      }-->
<!--      ul a {-->
<!--        color: #6777ef;-->
<!--        font-weight: 500;-->
<!--      }-->
<!--    }-->
<!--    .login-button {-->
<!--      &:hover {-->
<!--        background-color: #394eea !important;-->
<!--      }-->
<!--    }-->
<!--    .tg-button {-->
<!--      background-color: #3abaf4;-->
<!--      border-color: #3abaf4;-->
<!--      color: #fff;-->
<!--      &:hover {-->
<!--        background-color: #0da8ee;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  .regiser {-->
<!--    text-align: center;-->
<!--    margin-top: 3rem;-->
<!--    color: #98a6ad !important;-->
<!--    font-size: 14px;-->
<!--    font-weight: 400;-->
<!--    font-family: "Nunito", "Segoe UI", arial;-->
<!--    a {-->
<!--      color: #6777ef;-->
<!--      font-weight: 500;-->
<!--      transition: all 0.5s;-->
<!--    }-->
<!--  }-->
<!--  .simple-footer {-->
<!--    text-align: center;-->
<!--    margin-top: 40px;-->
<!--    margin-bottom: 40px;-->
<!--    font-size: 14px;-->
<!--    font-weight: 400;-->
<!--    font-family: "Nunito", "Segoe UI", arial;-->
<!--    color: #6c757d;-->
<!--    .copyright {-->
<!--      margin-top: 0.5rem;-->
<!--      a {-->
<!--        color: #6777ef;-->
<!--        font-weight: 500;-->
<!--        transition: all 0.5s;-->
<!--        transition: all 0.5s;-->
<!--        text-decoration: none;-->
<!--        background-color: transparent;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
