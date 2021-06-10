import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pictures: [],
    uniqId: 0,
    idForCompare: 0,
    cardCounter: 0,
  },
  mutations: {
    setUniqId(state) {
      state.pictures = state.pictures.map((picture) => {
        state.uniqId += 1;
        return {
          ...picture, uniqId: state.uniqId, showPic: false,
        };
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
    showPicture(state, pictureForCompare) {
      state.pictures.forEach((picture) => {
        if (picture.uniqId === pictureForCompare.uniqId) {
          // eslint-disable-next-line no-param-reassign
          picture.showPic = true;

          if (state.idForCompare === 0) {
            state.idForCompare = pictureForCompare.id;
            state.cardCounter += 1;
          } else if (state.idForCompare !== pictureForCompare.id) {
            state.cardCounter += 1;
            setTimeout(() => {
              state.pictures.forEach((pictureToHide) => {
                if (pictureToHide.id === state.idForCompare || pictureToHide.id === pictureForCompare.id) {
                  // eslint-disable-next-line no-param-reassign
                  pictureToHide.showPic = false;
                }
              });
              state.idForCompare = 0;
              state.cardCounter = 0;
            }, 1500);
          } else if (state.idForCompare === pictureForCompare.id) {
            state.idForCompare = 0;
          }
        }
      });
    },
  },
  actions: {
    setPictures() {
      axios.get('https://pixabay.com/api/?key=21981461-82783dc7d980b24f3d6ebf216&q=sport&image_type=photo')
        .then((response) => {
          response.data.hits.splice(0, 16);
          this.commit('uploadPictures', response.data.hits);
          this.commit('duplicatePictures');
          this.commit('setUniqId');
          this.commit('shufflingPictures');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
