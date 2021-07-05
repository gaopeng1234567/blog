<!--<template>-->
<!--  <div class="register">-->
<!--    <div class="container">-->
<!--      &lt;!&ndash; 顶部logo &ndash;&gt;-->
<!--      <el-row type="flex" class="logo" justify="center">-->
<!--        <el-col :span="6">-->
<!--          <div class="wrapper">-->
<!--            <img-->
<!--              class="shadow-light"-->
<!--              src="../assets/images/favicon.svg"-->
<!--              alt="logo"-->
<!--            />-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--      <div class="wrapper-main">-->
<!--        &lt;!&ndash; header 注册 &ndash;&gt;-->
<!--        <div class="header">-->
<!--          <p>注册</p>-->
<!--        </div>-->
<!--        &lt;!&ndash; <el-divider></el-divider> &ndash;&gt;-->
<!--        <div class="main-form">-->
<!--          &lt;!&ndash; 表单 &ndash;&gt;-->
<!--          <el-row :gutter="30" class="row-bg">-->
<!--            &lt;!&ndash; 第一列 &ndash;&gt;-->
<!--            <el-col-->
<!--              :xs="24"-->
<!--              :sm="{ span: 12, offset: 0 }"-->
<!--              :md="{ span: 12, offset: 0 }"-->
<!--              :lg="{ span: 11, offset: 1 }"-->
<!--              :xl="{ span: 11, offset: 1 }"-->
<!--            >-->
<!--              <el-form-->
<!--                :label-position="labelPosition"-->
<!--                label-width="80px"-->
<!--                :model="formLabelAlign"-->
<!--              >-->
<!--                <el-form-item label="昵称">-->
<!--                  <el-input v-model="formLabelAlign.name"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="邮箱">-->
<!--                  <el-input v-model="formLabelAlign.region">-->
<!--                    <el-select-->
<!--                      v-model="value"-->
<!--                      slot="append"-->
<!--                      placeholder="请选择"-->
<!--                    >-->
<!--                      <el-option-->
<!--                        v-for="item in options"-->
<!--                        :key="item.value"-->
<!--                        :label="item.label"-->
<!--                        :value="item.value"-->
<!--                      >-->
<!--                      </el-option>-->
<!--                    </el-select>-->
<!--                  </el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="密码">-->
<!--                  <el-input v-model="formLabelAlign.type"></el-input>-->
<!--                </el-form-item>-->
<!--              </el-form>-->
<!--            </el-col>-->
<!--            &lt;!&ndash; 第二列 &ndash;&gt;-->
<!--            <el-col-->
<!--              :xs="24"-->
<!--              :sm="12"-->
<!--              :md="12"-->
<!--              :lg="{ span: 11 }"-->
<!--              :xl="{ span: 11 }"-->
<!--            >-->
<!--              <el-form-->
<!--                :label-position="labelPosition"-->
<!--                label-width="80px"-->
<!--                :model="formLabelAlign"-->
<!--              >-->
<!--                <el-form-item label="邀请码 (选填)">-->
<!--                  <el-input v-model="formLabelAlign.name"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="邮箱验证码">-->
<!--                  <el-input v-model="formLabelAlign.region">-->
<!--                    <el-button slot="append" class="button-bg-color"-->
<!--                      >发送验证码</el-button-->
<!--                    >-->
<!--                  </el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="重复密码">-->
<!--                  <el-input v-model="formLabelAlign.type"></el-input>-->
<!--                </el-form-item>-->
<!--              </el-form>-->
<!--            </el-col>-->
<!--            &lt;!&ndash; 服务条款 &ndash;&gt;-->
<!--            <el-col :xl="{ span: 23, offset: 1 }">-->
<!--              <div class="service-wrapper">-->
<!--                <ul>-->
<!--                  <li><el-checkbox v-model="checked"></el-checkbox></li>-->
<!--                  <li>注册即代表同意</li>-->
<!--                  <li><a href="javascript:;;">服务条款</a></li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </el-col>-->
<!--            &lt;!&ndash; 注册按钮 &ndash;&gt;-->
<!--            <el-col :xl="{ span: 22, offset: 1 }">-->
<!--              <el-button-->
<!--                class="button-bg-color register-button"-->
<!--                style="width: 100%; margin-bottom: 2rem"-->
<!--                round-->
<!--                >注册</el-button-->
<!--              >-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--        </div>-->
<!--      </div>-->
<!--      <el-row :gutter="10" class="login">-->
<!--        已经有账号了？ <a href="/#/login">马上登录 👉</a>-->
<!--      </el-row>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--    name: "register",-->
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
<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.register {-->
<!--  // background-color: #f4f6f9;-->
<!--  height: 100vh;-->

<!--  .container {-->
<!--    width: 38%;-->
<!--    // background-color: cadetblue;-->
<!--    height: 100vh;-->
<!--    margin: auto;-->
<!--    .logo {-->
<!--      .shadow-light {-->
<!--        margin-top: 3rem;-->
<!--        box-shadow: 0 2px 6px #e6ecf1;-->
<!--        border-radius: 50% !important;-->
<!--        width: 100px;-->
<!--        height: 100px;-->
<!--      }-->
<!--      .wrapper {-->
<!--        text-align: center;-->
<!--      }-->
<!--      margin-bottom: 2.5rem;-->
<!--    }-->
<!--    .wrapper-main {-->
<!--      padding-right: 15px;-->
<!--      padding-left: 15px;-->
<!--      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);-->
<!--      background-color: #fff;-->
<!--      border-radius: 3px;-->
<!--      border: none;-->
<!--      border-top: 2px solid #6777ef;-->

<!--      .header {-->
<!--        font-weight: 700;-->
<!--        font-size: 16px;-->
<!--        color: #6777ef;-->
<!--        padding-right: 10px;-->
<!--        margin-bottom: 20px;-->
<!--        padding-left: 4%;-->
<!--        border-bottom: 1px solid #f9f9f9;-->
<!--        height: 70px;-->
<!--        line-height: 70px;-->
<!--      }-->
<!--      .el-input__inner {-->
<!--        height: 42px;-->
<!--        line-height: 42px;-->
<!--      }-->
<!--      //中间-->
<!--      .main-form {-->
<!--        .el-input-group__append {-->
<!--          width: 30%;-->
<!--        }-->
<!--        .el-form-item__label {-->
<!--          font-weight: 600;-->
<!--          color: #34395e;-->
<!--          font-size: 12px;-->
<!--          letter-spacing: 0.5px;-->
<!--        }-->
<!--        .el-select .el-input {-->
<!--          width: 100%;-->
<!--        }-->
<!--        //服务条款-->
<!--        .service-wrapper {-->
<!--          font-size: 14px;-->
<!--          font-weight: 400;-->
<!--          font-family: "Nunito", "Segoe UI", arial;-->
<!--          color: #6c757d;-->
<!--          margin-bottom: 1rem;-->
<!--          ul > li {-->
<!--            display: inline-block;-->
<!--            margin-right: 6px;-->
<!--          }-->
<!--          ul a {-->
<!--            color: #6777ef;-->
<!--            font-weight: 500;-->
<!--          }-->
<!--        }-->
<!--        .register-button {-->
<!--          box-shadow: 0 2px 6px #acb5f6;-->
<!--          color: #fff;-->
<!--          &:hover {-->
<!--            color: #6777ef;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--    .login {-->
<!--      text-align: center;-->
<!--      margin-top: 3rem;-->
<!--      // color: #98a6ad !important;-->
<!--      color: #fff;-->
<!--      font-size: 14px;-->
<!--      font-weight: 400;-->
<!--      font-family: "Nunito", "Segoe UI", arial;-->
<!--      a {-->
<!--        color: #6777ef;-->
<!--        font-weight: 500;-->
<!--        transition: all 0.5s;-->
<!--        -webkit-transition: all 0.5s;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  @media screen and (max-width: 375px) {-->
<!--    .container {-->
<!--      width: 90%;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
