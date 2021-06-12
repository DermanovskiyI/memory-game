import { createStore } from 'vuex';
import picturesModule from './pictures.module';

export default createStore({
  state: {
    pictures: [],
    uniqId: 0, // to dublicate same pics
    idForCompare: 0, // to compare the first and second pictures
    cardCounter: 0, // to disabling more than two pictures
    successCounter: 0, // to see that all the cards are open
    level: 1, // to change the difficulty of the game
  },
  mutations: {
    setUniqId(state) {
      state.pictures = state.pictures.map((picture) => { // set unique id for dublicate pics
        state.uniqId += 1;
        return {
          ...picture, uniqId: state.uniqId, showPic: true,
        };
      });
    },
    duplicatePictures(state) {
      state.pictures = state.pictures.concat(state.pictures);
    },
    shufflePictures(state) {
      state.pictures.sort(() => Math.random() - 0.5);

      state.pictures.forEach((picture) => { // show picture before start game
        setTimeout(() => {
          // eslint-disable-next-line no-param-reassign
          picture.showPic = false;
        }, 4000);
      });
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
            state.idForCompare = pictureForCompare.id; // assign id for compare with next card
            state.cardCounter += 1; // increase card counter for check how many cards are open
          } else if (state.idForCompare !== pictureForCompare.id) { // if ID's not same pictures must be flip back
            state.cardCounter += 1; // increase card counter for disable click on another cards
            setTimeout(() => {
              state.pictures.forEach((pictureToHide) => {
                if (pictureToHide.id === state.idForCompare || pictureToHide.id === pictureForCompare.id) { // flip back first and second pics
                  // eslint-disable-next-line no-param-reassign
                  pictureToHide.showPic = false;
                }
              });
              state.idForCompare = 0;
              state.cardCounter = 0;
            }, 1000);
          } else if (state.idForCompare === pictureForCompare.id) { // if the cards are the same reset cardCounter and idForCompare, and increase success counter
            state.idForCompare = 0;
            state.cardCounter = 0;
            state.successCounter += 2;
          }
          if (state.successCounter === state.pictures.length) { // if successCounter == pictures length go to next level
            state.level += 1;
            state.successCounter = 0;
          }
        }
      });
    },

  },
  actions: {
    setPictures({ commit, state }) {
      const { pictures } = state.picturesModule;
      const newPictures = pictures.slice(0, 2 + state.level * 2);
      commit('uploadPictures', newPictures);
      commit('duplicatePictures');
      commit('setUniqId');
      commit('shufflePictures');
    },
  },
  modules: {
    picturesModule,
  },
});
