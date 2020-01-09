<template>
  <a id="image-block" :href="src">

    <img :src="src" alt="изображение" class="image">

  </a>
</template>

<script>
export default {
  name: 'ImageBlock',
  props: {
    src: String,
  },
  data: () => {
    return {

    }
  },
}
</script>

<style>
#image-block {
  width: 280px;
  height: 200px;
  margin: 10px;
}

.image {
  width: 100%;
  max-width: 280px;
  height: 100%;
}

#image-block:hover {
  transition: all 300ms;
  transform: scale(1.1);
}

#image-block:active {
  transition: all 100ms;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  #image-block {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>