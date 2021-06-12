/* eslint-disable no-shadow */
import { fetchPics } from './api';
import { GET_PICTURES_REQUEST, GET_PICTURES_SUCCESS, GET_PICTURES_FAILURE } from './mutation.types';

const initialState = {
  pictures: [],
  status: {
    isFetching: false,
    isFetched: false,
    error: false,
  },
};
const state = { ...initialState };
const mutations = {
  [GET_PICTURES_REQUEST](state) {
    state.status.isFetching = true;
    state.status.isFetched = false;
    state.status.error = false;
    state.pictures = [];
  },
  [GET_PICTURES_SUCCESS](state, pictures) {
    state.status.isFetching = false;
    state.status.isFetched = true;
    state.pictures = pictures;
  },
  [GET_PICTURES_FAILURE](state) {
    state.status.isFetching = false;
    state.status.isFetched = true;
    state.status.error = true;
  },
};
const actions = {
  getPictures({ commit, dispatch }) {
    commit(GET_PICTURES_REQUEST);
    fetchPics('dogs')
      .then((response) => {
        commit(GET_PICTURES_SUCCESS, response.data.hits);
        dispatch('setPictures');
      })
      .catch((error) => {
        console.log(error);
        commit(GET_PICTURES_FAILURE, error.message);
      });
  },
};

export default {
  state,
  actions,
  mutations,
};
