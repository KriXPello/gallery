<template>
  <div id="app">

    <div id="wrapper" ref="wrapper">
      <image-block
        v-for="(image, i) in images"
        :key="i"
        :src="image"
      />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ImageBlock from './components/ImageBlock.vue';

const getters = [
  'images',
];

export default {
  name: 'App',
  components: {
    'image-block': ImageBlock,
  },
  computed: {
    ...mapGetters(getters),
  },
  mounted() {
    const optimize = () => {
      const wrapper = this.$refs.wrapper;

      const width = Math.floor(window.innerWidth / 300) * 300;

      wrapper.setAttribute('style', `width: ${width}px`);
    }

    window.onresize = optimize;

    optimize();
  }
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
</style>
