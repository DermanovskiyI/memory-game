import { createStore } from 'vuex';

export default createStore({
  state: {
    pictures: [],
  },
  mutations: {
    fetchPictures(state, picture) {
      state.pictures.push(picture);
      console.log(state.pictures);
    },
  },
  actions: {
    fetchPictures() {
      this.$axios.get('https://pixabay.com/api/?key=21981461-82783dc7d980b24f3d6ebf216&q=yellow+flowers&image_type=photo')
        .then((response) => {
          // console.log(response.data.hits);
          this.commit('fetchPictures', response.data.hits);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
