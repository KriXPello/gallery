import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const address = 'http://kuibarov.ru/images.json';

export default new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    setImages: (state, arr) => state.images = arr,
  },
  actions: {
    getImages: async ctx => { // Запрос изображений с сервера
      try {
        const request = await fetch(address);
        const result = await request.json();

        ctx.commit('setImages', result);  
      } catch (err) { // Если вдруг у пользователя накрылся интернет
        setTimeout(() => {
          ctx.dispatch('getImages');
        }, 1000);
      }
    },
  },
  getters: {
    images: state => state.images,
  }
});