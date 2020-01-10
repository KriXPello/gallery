<template>
  <div id="app">

    <div id="wrapper">
      <a
        v-for="(image, i) in images"
        :key="i"
        class="image-block"
        :href="image"
      >
        <img :src="image" alt="Изображение" @load="optimize">
      </a>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const getters = [
  'images',
];

const actions = [
  'getImages',
];

export default {
  name: 'App',
  computed: {
    ...mapGetters(getters),
  },
  methods: {
    ...mapActions(actions),
    optimize() {
      const wrapper = this.$el.querySelector('#wrapper');
      const blocks = this.$el.querySelectorAll('.image-block');

      const resizeWrapper = width => { // Функция для ресайзинга контейнера блоков с картинками
        wrapper.setAttribute('style', `width: ${width}px`);
      }

      const resizeBlocks = side => { // Функция для ресайзинга блоков с картинками
        blocks.forEach(el=> {
          el.setAttribute('style', `width: ${side}px; height: ${side}px`);
        });
      }

      const screenWidth = window.innerWidth;
      const intWidth = Math.floor(screenWidth / 300) * 300; // Ширина, в которую помещается n блоков шириной 300px

      resizeWrapper(intWidth >= 600 ? intWidth : screenWidth);
      resizeBlocks(intWidth >= 600 ? 280 : screenWidth);
    }
  },
  mounted() {
    this.getImages();

    window.onresize = this.optimize;
  },
}
</script>

<style>
html {
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: #1F0A09;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #fff;
  overflow-x: hidden;
}

#app {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.image-block {
  margin: 10px;
  object-fit: cover;
  position: relative;
  border: solid rgb(243, 243, 243) 1px;
  transition: all 300ms;
}

.image-block:hover {
  transform: scale(1.03);
  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.3);
}

.image-block:active {
  transition: all 100ms;
  transform: scale(1.01);
}

.image-block img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* Анимации transition Vue */
.list-enter-active, .list-leave-active {
  transition: all 300ms;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>