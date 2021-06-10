<template>
  <div class="cards">
      <ul class="cards__list">
          <cardsItem
            v-for="picture in pictures"
            :key="picture.uniqId"
            :picture="picture"
          />
      </ul>
      <div class="modal" v-show="showModal">
        <div class="modal__content">
          <div class="modal__text">ВЫ ПРОШЛИ УРОВЕНЬ!!!!</div>
          <button type="button" class="modal__btn" @click="hideModal">Следующий уровень</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import cardsItem from './cardsItem.vue';

export default {
  components: {
    cardsItem,
  },
  computed: {
    ...mapState({
      pictures: (state) => state.pictures,
      cardCounter: (state) => state.cardCounter,
      level: (state) => state.level,
      successCounter: (state) => state.successCounter,
    }),
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    ...mapActions(['setPictures']),
    ...mapMutations(['goToNextLevel']),
    hideModal() {
      this.setPictures();
      this.showModal = false;
    },
  },
  watch: {
    level() {
      this.showModal = true;
    },
  },
  created() {
    this.setPictures();
  },
};
</script>

<style lang="scss">
.cards {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px 50px;
        border: 1px solid black;
    }
}
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: red;
    border-radius: 20px;
    &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    }
    &__text {
      margin-bottom: 20px;
      color: white;
    }
    &__btn {
      cursor: pointer;
      padding: 10px;
      border-radius: 5px;
    }
}
</style>
