<template>
  <div class="blog-index">
    <!--    侧边栏弹出-->
    <push>
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </push>
    <div id="page-wrap">
      <!--   header 通用头部  -->
      <div class="blog-header">
        <blog-header></blog-header>
      </div>
      <!--    文章方块列表  content-->
      <div class="blog-container wrapper-inner">
        <card
            :data-image='article.dataImage' v-for="(article,i) in articleList" v-bind:key="i"
        >
          <h1 slot="header">{{ article.articleHeader }}</h1>
          <div class="content" slot="content">
            <div class="blog-slider__text">
              {{ article.articleContent }}
            </div>
            <a :href="'/#/index/articleDetail/'+article.id" class="blog-slider__button">READ MORE</a>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import card from "../../components/blog/Card";
import {Push} from 'vue-burger-menu';
import BlogHeader from "@/components/blog/BlogHeader";

export default {
  components: {
    card,
    Push,
    BlogHeader
  },
  data() {
    return {
      articleList: [
        {
          id: '1',
          dataImage: "/imgs/2.jpg",
          articleHeader: "Canyons",
          articleContent: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
        },
        {
          id: '2',
          dataImage: "/imgs/7.jpg",
          articleHeader: "Patrick",
          articleContent: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
        },
        {
          id: '3',
          dataImage: "/imgs/5.jpg",
          articleHeader: "ZhangJiaZhinv",
          articleContent: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
        },
        {
          id: '4',
          dataImage: "/imgs/6.jpg",
          articleHeader: "Pouchoe",
          articleContent: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
        },
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/base";

$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.blog-index {
  font-family: 'Josefin Sans', sans-serif;
  .title {
    font-family: "Raleway";
    font-size: 24px;
    font-weight: 700;
    color: #5d4037;
    text-align: center;
  }

  .blog-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card-wrap {
    margin: 40px;
    transform: perspective(800px);
    transform-style: preserve-3d;
    //cursor: pointer;
    // background-color: #fff;

    &:hover {
      .card-info {
        transform: translateY(0);
      }

      .card-info .content > * {
        opacity: 1;
      }

      .card-info,
        //   .card-info .content > * {
        //     transition: 0.6s $hoverEasing;
        //   }
      .card-info:after {
        transition: 5s $hoverEasing;
        opacity: 1;
        transform: translateY(0);
      }

      .card-bg {
        transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
        opacity: 0.8;
      }

      .card {
        transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
        box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
      }
    }
  }

  //header头部布局
  .blog-header {
    height: 354px;
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }

  //卡片布局控制
  .card {
    position: relative;
    flex: 0 0 240px;
    width: 560px;
    height: 290px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
    transition: 1s $returnEasing;
    @media screen and (max-width: 768px) {
      width: 320px;
      height: 420px;
    }
    @media screen and (max-width: 1360px) {
      width: 320px;
      height: 420px;
    }
  }

  .card-bg {
    box-sizing: content-box;
    opacity: 0.5;
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
    pointer-events: none;
  }

  .card-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    transform: translateY(66%);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

    .content > * {
      opacity: 0;
      text-shadow: rgba(black, 1) 0 2px 3px;
      transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    * {
      position: relative;
      z-index: 1;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
              to bottom,
              transparent 0%,
              rgba(#000, 0.6) 100%
      );
      background-blend-mode: overlay;
      opacity: 0;
      transform: translateY(100%);
      transition: 5s 1s $returnEasing;
    }

    .blog-slider__button {
      display: inline-flex;
      background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      padding: 15px 35px;
      border-radius: 50px;
      color: #fff;
      box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
      text-decoration: none;
      font-weight: 500;
      justify-content: center;
      text-align: center;
      letter-spacing: 1px;
      @media screen and (max-width: 576px) {
        width: 100%;
      }
    }

    .blog-slider__text {
      font-size: 18px;
      margin-bottom: 30px;
      line-height: 1.5em;
    }

    .content > * {
      @for $i from 0 to 15 {
        &:nth-child(#{$i + 1}) {
          transition-delay: $i * 0.3 + 0.3s;
        }
      }
    }
  }

  .card-info h1 {
    font-family: "Playfair Display";
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(black, 0.5) 0 10px 10px;
  }

  //侧边栏 样式控制
  .bm-burger-button {
    position: fixed;
    width: 38px;
    height: 30px;
    left: 36px;
    top: 36px;
    cursor: pointer;
    z-index: 9;
  }

  .bm-burger-bars {
    background-color: #333;
  }

  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }

  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: rgb(84, 92, 100); /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.2s; /*0.5 second transition effect to slide in the sidenav*/
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .bm-item-list {
    margin-left: 0;
    font-size: 20px;
  }

  .bm-item-list > * {
    display: block;
    text-decoration: none;
    padding: 0;
  }

  .bm-item-list > * > span {
    margin-left: 0px;
    font-weight: 700;
    color: white;
  }

  .el-menu {
    border: 0px;
  }
}
</style>
