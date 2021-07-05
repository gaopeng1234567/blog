<template>
  <div class="welcome" v-bind:class="{loading:loading,welcome_3:welcome_3}">
    <main>
      <svg class="circles" width="100%" height="100%" viewBox="0 0 1400 1400">
        <def>
          <path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"/>
          <path id="circle-2" d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"/>
          <path id="circle-3" d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"/>
          <path id="circle-4" d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"/>
        </def>
        <text class="circles__text circles__text--1">
          <textPath class="circles__text-path" xlink:href="#circle-1" aria-label="" textLength="2830"> SpringCloud Redis
            JVM JUC&nbsp;
          </textPath>
        </text>
        <text class="circles__text circles__text--2">
          <textPath class="circles__text-path" xlink:href="#circle-2" aria-label="" textLength="2001"> Patrick
            SpringBoot Demo&nbsp;
          </textPath>
        </text>
        <text class="circles__text circles__text--3">
          <textPath class="circles__text-path" xlink:href="#circle-3" aria-label="" textLength="1341"> Mybatis Kafka ELK&nbsp;</textPath>
        </text>
        <text class="circles__text circles__text--4">
          <textPath class="circles__text-path" xlink:href="#circle-4" aria-label="" textLength="836"> Tomcat Spring
            Session &nbsp;
          </textPath>
        </text>
      </svg>
      <div class="frame">
<!--        <h1 class="frame__title">Circular Text Effect</h1>-->
        <blog-header class="frame__title"></blog-header>
<!--        <nav class="frame__links">-->
<!--          <a href="http://tympanus.net/Tutorials/InfiniteCircularGallery/">Previous demo</a>-->
<!--          <a href="https://tympanus.net/codrops/?p=53487">Article</a>-->
<!--          <a href="https://github.com/codrops/CircularTextEffect/">GitHub</a>-->
<!--        </nav>-->

      </div>
      <div class="content">
        <p>We are a creative agency that focuses on human-centric design and ergonomic workplace innovations.</p>
      </div>
      <button class="enter">
        <div class="enter__bg"></div>
        <span class="enter__text">Enter</span>
      </button>
    </main>
  </div>
</template>

<script>
import {gsap} from 'gsap';
import BlogHeader from "@/components/blog/BlogHeader"


export default {
  name: 'Welcome',
  components: {BlogHeader},
  data() {
    return {
      loading: true,
      welcome_3: true,
      circleTextTotal: 0,
      dom: {
        frame: null,
        content: null,
        enterCtrl: null,
        enterBackground: null,
        circleText: null,
        el: null
      }
    }
  },
  mounted() {
    // document.documentElement.className = "js";
    this.initConstruct();
    setTimeout(() => {
      this.loading = false;
      this.start();
    }, 100);
  },
  methods: {
    initConstruct() {
      this.dom.el = document.querySelector('.circles');
      this.dom.frame = document.querySelector('.frame');
      this.dom.content = document.querySelector('.content');
      this.dom.enterCtrl = document.querySelector('.enter');
      this.dom.enterBackground = document.querySelector('.enter__bg');
      this.dom.circleText = [...this.dom.el.querySelectorAll('text.circles__text')];
      this.circleTextTotal = this.dom['circleText'].length;
      this.setUpGasp();
    },
    setUpGasp() {
      gsap.set(this.dom.circleText, {transformOrigin: '50% 50%'});
      gsap.set([this.dom.circleText, this.dom.content.children, this.dom.frame.children], {opacity: 0});
      // don't allow to hover
      gsap.set(this.dom.enterCtrl, {pointerEvents: 'none'});

      this.initEvents();
    },
    initEvents() {
      // click and hover events for the "enter" button:
      this.enterMouseEnterEv = () => {
        gsap.killTweensOf([this.dom.enterBackground, this.dom.circleText]);

        gsap.to(this.dom.enterBackground, {
          // duration: 0.8,
          // ease: 'power4',
          // scale: 1.2,
          // opacity: 1
          duration: 1.3,
          ease: 'expo',
          scale: 1.4
        });

        gsap.to(this.dom.circleText, {
          // duration: 4,
          // ease: 'power4',
          // rotate: '+=180',
          // stagger: {
          //   amount: -0.3
          // }
          duration: 0.5,
          ease: 'expo',
          rotation: '+=120',
          scale: 0.5,
          opacity: 0.2,
          stagger: {
            amount: -0.15
          }
        });
      };
      this.enterMouseLeaveEv = () => {
        gsap.to(this.dom.enterBackground, {
          // duration: 0.8,
          // ease: 'power4',
          // scale: 1
          duration: 2,
          ease: 'elastic.out(1, 0.4)',
          scale: 1
        });
        gsap.to(this.dom.circleText, {
          duration: 2,
          ease: 'elastic.out(1, 0.4)',
          scale: 1,
          rotation: '-=120',
          opacity: 1,
          stagger: {
            amount: 0.15
          }
        });
      };
      this.enterClickEv = () => this.enter();

      this.dom.enterCtrl.addEventListener('mouseenter', this.enterMouseEnterEv);
      this.dom.enterCtrl.addEventListener('mouseleave', this.enterMouseLeaveEv);
      this.dom.enterCtrl.addEventListener('click', this.enterClickEv);
    },
    // start gasp animal
    start() {
      this.startTL = gsap.timeline()
          .addLabel('start', 0)
          // scale in the texts & enter button and fade them in
          .to([this.dom.circleText, this.dom.enterCtrl], {
            duration: 2.5,
            ease: 'expo',
            startAt: {opacity: 0, scale: 0.3},
            scale: 1,
            opacity: 1,
            stagger: {
              amount: 0.5
            }
          }, 'start')
          // at start+1 allow the hover over the enter ctrl
          .add(() => gsap.set(this.dom.enterCtrl, {pointerEvents: 'auto'}), 'start+=1');
    },
    start_2() {
      this.startTL = gsap.timeline()
          .addLabel('start', 0)
          // rotation for all texts
          .to(this.dom.circleText, {
            duration: 3,
            ease: 'expo.inOut',
            rotation: 90,
            stagger: {
              amount: 0.4
            }
          }, 'start')
          // scale in the texts & enter button and fade them in
          .to([this.dom.circleText, this.dom.enterCtrl], {
            duration: 3,
            ease: 'expo.inOut',
            startAt: {opacity: 0, scale: 0.8},
            scale: 1,
            opacity: 1,
            stagger: {
              amount: 0.4
            }
          }, 'start')
          // at start+1 allow the hover over the enter ctrl
          .add(() => {
            gsap.set(this.dom.enterCtrl, {pointerEvents: 'auto'});
          }, 'start+=2');
    },
    // enter click ev
    enter() {
      // stop the previous timeline
      console.log("点击时间")
      this.startTL.kill();
      // remove any event listener on the button
      this.dom.enterCtrl.removeEventListener('mouseenter', this.enterMouseEnterEv);
      this.dom.enterCtrl.removeEventListener('mouseleave', this.enterMouseLeaveEv);
      this.dom.enterCtrl.removeEventListener('click', this.enterClickEv);
      gsap.set(this.dom.enterCtrl, {pointerEvents: 'none'});
      // show frame and content
      gsap.set([this.dom.frame, this.dom.content], {opacity: 1});
      // start the animation
      gsap.timeline()
          .addLabel('start', 0)
          .to(this.dom.enterCtrl, {
            duration: 1.5,
            ease: 'expo.inOut',
            scale: 0.7,
            opacity: 0
          }, 'start')
          .to(this.dom.circleText, {
            duration: 1.5,
            ease: 'expo.inOut',
            scale: i => 1.5 + (this.circleTextTotal - i) * .3,
            opacity: 0,
            stagger: {
              amount: 0.2
            }
          }, 'start')
          // show the content elements
          .to([this.dom.content.children, this.dom.frame.children], {
            duration: 1,
            ease: 'power3.out',
            startAt: {opacity: 0, scale: 0.9},
            scale: 1,
            opacity: 1,
            stagger: {
              amount: 0.3
            }
          }, 'start+=1.1')
    }
  }
};
</script>
<style lang='scss' scoped>
.welcome {
  margin: 0;
  --color-text: #a5a5a5;
  --color-bg: #191613;
  --color-link: #d6af7c;
  --color-link-hover: #fff;
  --color-text-circle-1: #48423c;
  --color-text-circle-2: #48423c;
  --color-text-circle-3: #48423c;
  --color-text-circle-4: #48423c;
  --font-circle-1: ivymode, sans-serif;
  --font-weight-circle-1: 300;
  --font-circle-2: modesto-condensed, serif;
  --font-weight-circle-2: 400;
  --font-circle-3: minerva-modern, sans-serif;
  --font-weight-circle-3: 400;
  --font-circle-4: niagara, serif;
  --font-weight-circle-4: 300;
  --color-button: #d6ae7c;
  --color-text-button: #1d1812;
  --dim-button: 90px;
  color: var(--color-text);
  background-color: var(--color-bg);
  font-family: tenon, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //font-style: normal;
}

.welcome-2 {
  --color-text: #a5a5a5;
  --color-bg: #000000;
  --color-link: #ea34a6;
  --color-link-hover: #fff;
  --color-font-circle: #7b7772;
  --color-button: #ea34a6;
  --color-text-button: #000000;
  --color-text-circle-1: #ea34a6;
  --color-text-circle-2: #422163;
  --color-text-circle-3: #212044;
  --color-text-circle-4: #292725;
  --font-circle-1: niagara, serif;
  --font-weight-circle-1: 300;
  --font-circle-2: ambroise-firmin-std, serif;
  --font-weight-circle-2: 300;
  --font-circle-3: modesto-condensed, serif;
  --font-weight-circle-3: 400;
  --font-circle-4: niagara, serif;
  --font-weight-circle-4: 300;
}

.welcome_3 {
  --color-text: #292725;
  --color-bg: #dad4d1;
  --color-link: #a99c90;
  --color-link-hover: #292725;
  --color-font-circle: #7b7772;
  --color-button: #a99c90;
  --color-text-button: #272524;
  --color-text-circle-1: #272524;
  --color-text-circle-2: #272524;
  --color-text-circle-3: #272524;
  --color-text-circle-4: #272524;
  --font-circle-1: modesto-condensed, serif;
  --font-weight-circle-1: 400;
  --font-circle-2: ambroise-firmin-std, serif;
  --font-weight-circle-2: 300;
  --font-circle-3: modesto-condensed, serif;
  --font-weight-circle-3: 400;
  --font-circle-4: niagara, sans-serif;
  --font-weight-circle-4: 300;
}


/* Page Loader */
.welcome::before, .welcome::after {
  content: '';
  position: fixed;
  z-index: 1000;
  opacity: 0;
  transition: 0.3s opacity;
  pointer-events: none;
}

.welcome::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-bg);
}

.welcome::after {
  content: 'Loading';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 1;
  color: var(--color-link);
}

.loading::before, .loading::after {
  opacity: 1;
  pointer-events: auto;
}

a {
  text-decoration: none;
  color: var(--color-link);
  outline: none;
}

a:hover {
  color: var(--color-link-hover);
  outline: none;
}

/* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
a:focus {
  /* Provide a fallback style for browsers
   that don't support :focus-visible */
  outline: none;
  background: lightgrey;
}

a:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
   that do support :focus-visible */
  background: transparent;
}

a:focus-visible {
  /* Draw a very noticeable focus style for
   keyboard-focus on browsers that do support
   :focus-visible */
  outline: 2px solid red;
  background: transparent;
}

.frame {
  padding: 3rem 5vw;
  text-align: center;
  position: relative;
  font-weight: 500;
  will-change: transform;
}

.frame {
  opacity: 0;
}

.frame__title {
  //font-size: 1rem;
  //margin: 0 0 1rem;
  //font-weight: 500;
}

.frame__links {
  display: inline;
}

.frame__links a:not(:last-child),
.frame__demos a:not(:last-child) {
  margin: 0 1rem 0 0;
}

.frame__demos {
  margin: 1rem 0;
}

.frame__demo--current,
.frame__demo--current:hover {
  color: var(--color-text);
}

.enter {
  display: block;
  border: 0;
  width: var(--dim-button);
  height: var(--dim-button);
  position: absolute;
  left: calc(50% - var(--dim-button) / 2);
  top: calc(50% - var(--dim-button) / 2);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  background: none;
  color: var(--color-text-button);
  padding: 0;
}

.enter:focus,
.enter:hover,
.enter:active {
  outline: none;
}

.enter__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--color-button);
}

.enter__text {
  position: relative;
}

.enter {
  opacity: 0;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 2rem;
  height: calc(100vh - 13rem);
  position: relative;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.content {
  opacity: 0;
}

.content p {
  font-size: 2rem;
  font-size: clamp(1.25rem, 6vw, 2.15rem);
  line-height: 1.25;
  max-width: 900px;
  margin: 0;
  pointer-events: none;
  will-change: transform;
}

.circles {
  pointer-events: none;
  position: fixed;
  --dim: 186vmin;
  width: var(--dim);
  height: var(--dim);
  top: calc(50% - var(--dim) / 2);
  left: calc(50% - var(--dim) / 2);
}

.demo-3 .circles {
  --dim: 206vmin;
}

.circles__text {
  text-transform: uppercase;
  transform-origin: 700px 700px;
  will-change: transform, opacity;
}

.circles__text--1 {
  font-size: 25vmin;
  font-size: clamp(170px, 25vmin, 180px);
  font-family: var(--font-circle-1);
  font-weight: var(--font-weight-circle-1);
  fill: var(--color-text-circle-1);
}

.circles__text--2 {
  font-size: 17vmin;
  font-size: clamp(136px, 17vmin, 153px);
  font-family: var(--font-circle-2);
  font-weight: var(--font-weight-circle-2);
  fill: var(--color-text-circle-2);
}

.circles__text--3 {
  font-size: 13.5vmin;
  font-size: clamp(110px, 13.5vmin, 120px);
  font-family: var(--font-circle-3);
  font-weight: var(--font-weight-circle-3);
  fill: var(--color-text-circle-3);
}

.circles__text--4 {
  font-size: 9.5vmin;
  font-size: clamp(85px, 9.5vmin, 94px);
  font-family: var(--font-circle-4);
  font-weight: var(--font-weight-circle-4);
  fill: var(--color-text-circle-4);
}

@media screen and (min-width: 53em) {
  //.frame {
  //  position: fixed;
  //  text-align: left;
  //  z-index: 100;
  //  top: 0;
  //  left: 0;
  //  display: grid;
  //  align-content: space-between;
  //  width: 100%;
  //  max-width: none;
  //  height: 100vh;
  //  padding: 2rem;
  //  pointer-events: none;
  //  grid-template-columns: 50% 50%;
  //  grid-template-rows: auto auto auto;
  //  grid-template-areas: 'title links'
	//						'... ...'
	//						'... demos';
  //}
  .frame__title {
    //margin: 0;
    //grid-area: title;
  }
  .frame__menu {
    grid-area: menu;
    justify-self: end;
  }
  .frame__links {
    grid-area: links;
    padding: 0;
    justify-self: end;
  }
  .frame__demos {
    margin: 0;
    grid-area: demos;
    justify-self: end;
  }
  .frame a {
    pointer-events: auto;
  }
  .content {
    height: 100vh;
    justify-content: center;
    text-align: left;
  }
}
</style>
