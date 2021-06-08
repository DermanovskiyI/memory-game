import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pictures: [],
  },
  mutations: {
    uploadPictures(state, pictures) {
      state.pictures = pictures;
    },
  },
  actions: {
    uploadPictures() {
      axios.get('https://pixabay.com/api/?key=21981461-82783dc7d980b24f3d6ebf216&q=yellow+flowers&image_type=photo')
        .then((response) => {
          this.commit('uploadPictures', response.data.hits);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
