<template>
  <div id="app">

    <div id="wrapper">
      <a
        v-for="(image, i) in images"
        :key="i"
        class="image-block"
        :href="image"
      >
        <img :src="image" alt="Изображение">
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
  },
  mounted() {
    this.getImages();
  },
}
</script>

<style>
html {
  font-size: 1vw;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.image-block {
  margin: 10px;
  object-fit: cover;
  transition: all 300ms;
  padding-bottom: calc(100% - 20px);
  position: relative;
  height: 0;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
</style>