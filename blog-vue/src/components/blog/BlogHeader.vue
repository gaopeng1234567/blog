<template>
  <div class="blog-header-wrapper">
    <div class="header">
      <div class="info">
        <h4><a href="#category">patrick</a></h4>
        <h1>KEN BURNS HEADERS ARE THE BEST</h1>
        <div class="meta">
          <a href="https://twitter.com/nodws" target="_b" class="author"></a><br>
          By patrick on November 30, 2020
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog-header",
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i');

.blog-header-wrapper {
  font-family: 'Josefin Sans', sans-serif;

  a {
    text-decoration: none
  }

  .header {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    height: 50vw;
    max-height: 354px;
    min-width: 300px;
    color: #eee;
  }

  .header:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 40%, rgba(27, 32, 48, 1) 100%);
  }

  .header:before {
    content: "";
    width: 100%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    transform: translateZ(0);
    background: #1B2030 url(../../assets/images/blog-bg.jpeg) 50% 0 no-repeat;

    background-size: 100%;
    background-attachment: fixed;
    animation: grow 120s linear 10ms infinite;
    transition: all 0.4s ease-in-out;
    z-index: -2
  }

  .header a {
    color: #eee
  }

  .info {
    flex: 0 0 auto;
    width: 50%
  }

  .info {
    width: 100%;
    padding: 8% 10% 0 10%;
    text-align: center;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);

    h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
  }

  .author {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url(../../assets/images/blog-bg.jpeg) center no-repeat;
    background-size: cover;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 3px
  }

  .info h4, .meta {
    font-size: 0.8rem
  }

  .meta {
    font-style: italic;
  }

  @keyframes grow {
    0% {
      transform: scale(1) translateY(0px)
    }
    50% {
      transform: scale(1.2) translateY(-400px)
    }
  }

  .content {
    padding: 5% 10%;
    text-align: justify
  }

  .btn {
    color: #333;
    border: 2px solid;
    border-radius: 3px;
    text-decoration: none;
    display: inline-block;
    padding: 5px 10px;
    font-weight: 600
  }

  .twtr {
    margin-top: 100px
  }

  .btn.twtr:after {
    content: "\1F426";
    padding-left: 5px
  }
}
</style>
