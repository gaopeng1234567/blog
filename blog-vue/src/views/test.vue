<template>
  <div class="blog-index">
    <div class="blog-header"></div>
    <div class="blog-container">
      <card
        data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Canyons</h1>
        <div class="content" slot="content">
          <div class="blog-slider__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            voluptate repellendus magni illo ea animi?
          </div>
          <a href="#" class="blog-slider__button">READ MORE</a>
        </div>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Canyons</h1>
        <div class="content" slot="content">
          <div class="blog-slider__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            voluptate repellendus magni illo ea animi?
          </div>
          <a href="#" class="blog-slider__button">READ MORE</a>
        </div>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Canyons</h1>
        <div class="content" slot="content">
          <div class="blog-slider__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            voluptate repellendus magni illo ea animi?
          </div>
          <a href="#" class="blog-slider__button">READ MORE</a>
        </div>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Canyons</h1>
        <div class="content" slot="content">
          <div class="blog-slider__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            voluptate repellendus magni illo ea animi?
          </div>
          <a href="#" class="blog-slider__button">READ MORE</a>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import card from "../components/blog/Card";
export default {
  components: {
    card,
  },
};
</script>
<style lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

body {
  height: 100%;
  width: 100%;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #fd3838 74%);
}
// body {
//   margin: 40px 0;
//   font-family: "Raleway";
//   font-size: 14px;
//   font-weight: 500;
//   background-color: #bcaaa4;
//   -webkit-font-smoothing: antialiased;
// }

.blog-index {
  .title {
    font-family: "Raleway";
    font-size: 24px;
    font-weight: 700;
    color: #5d4037;
    text-align: center;
  }

  p {
    line-height: 1.5em;
  }

  h1 + p,
  p + p {
    margin-top: 10px;
  }

  .blog-container {
    padding: 40px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card-wrap {
    margin: 40px;
    transform: perspective(800px);
    transform-style: preserve-3d;
    cursor: pointer;
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
  .card {
    position: relative;
    flex: 0 0 240px;
    width: 640px;
    height: 320px;
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
}
</style>