import { createStore } from 'vuex';
import axios from 'axios';

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
          if (state.successCounter === state.pictures.length) { // if success counter == pictures length go to next level
            state.level += 1;
            state.successCounter = 0;
          }
        }
      });
    },

  },
  actions: {
    setPictures() {
      axios.get('https://pixabay.com/api/?key=21981461-82783dc7d980b24f3d6ebf216&q=sport&image_type=photo')
        .then((response) => {
          if (this.state.level === 1) {
            response.data.hits.splice(0, 16);
          }
          if (this.state.level === 2) {
            response.data.hits.splice(0, 14);
          }
          if (this.state.level === 3) {
            response.data.hits.splice(0, 12);
          }
          this.commit('uploadPictures', response.data.hits);
          this.commit('duplicatePictures');
          this.commit('setUniqId');
          this.commit('shufflePictures');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
