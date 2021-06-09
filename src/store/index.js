import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pictures: [],
    uniqId: 0,
  },
  mutations: {
    setUniqId(state) {
      state.pictures = state.pictures.map((picture) => {
        state.uniqId += 1;
        return { ...picture, uniqId: state.uniqId };
      });
    },
    duplicatePictures(state) {
      state.pictures = state.pictures.concat(state.pictures);
    },
    shufflingPictures(state) {
      state.pictures.sort(() => Math.random() - 0.5);
    },
    uploadPictures(state, pictures) {
      state.pictures = pictures;
    },
  },
  actions: {
    setPictures() {
      axios.get('https://pixabay.com/api/?key=21981461-82783dc7d980b24f3d6ebf216&q=car&image_type=photo')
        .then((response) => {
          response.data.hits.splice(0, 16);
          this.commit('uploadPictures', response.data.hits);
          this.commit('duplicatePictures');
          this.commit('shufflingPictures');
          this.commit('setUniqId');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
