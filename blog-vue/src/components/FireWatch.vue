<template>
  <div class="parallax">
    <div class="parallax__layer parallax__layer__0">
      <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true"
      />
    </div>
    <div class="parallax__layer parallax__layer__1">
      <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true"
      />
    </div>
    <div class="parallax__layer parallax__layer__2">
      <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true"
      />
    </div>
    <div class="parallax__layer parallax__layer__3">
      <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true"
      />
    </div>
    <div class="parallax__layer parallax__layer__4">
      <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true"
      />
    </div>
    <div class="parallax__layer parallax__layer__5">
      <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true"
      />
    </div>
    <div class="parallax__layer parallax__layer__6">
      <img
        src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true"
      />
    </div>
    <div class="parallax__cover"></div>
  </div>
</template>

<script >
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
html,
body {
  background-color: #fedcc8;
}

.parallax {
  perspective: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -1500px;
}

.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img {
    display: block;
    position: absolute;
    bottom: 0;
  }
}

.parallax__cover {
  background: #2d112b;
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 2000px;
  z-index: 2;
}

$parallax__layers: 6;

@for $i from 0 through $parallax__layers {
  $x: ($parallax__layers - $i) / 2;
  .parallax__layer__#{$i} {
    transform: translateZ(-100 * $x#{px}) scale($x + 1);
  }
}
</style>
