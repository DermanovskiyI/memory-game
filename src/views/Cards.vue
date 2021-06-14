<template>
  <div class="cards">
      <ul class="cards__list">
          <cards-item
            v-for="picture in pictures"
            :key="picture.uniqId"
            :picture="picture"
          />
      </ul>
      <modal
        :showModal="showModal"
        v-if="showModal"
        @hideModal="hideModal"
      />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CardsItem from './CardsItem.vue';
import Modal from './Modal.vue';

export default {
  components: {
    CardsItem,
    Modal,
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
    ...mapActions(['setPictures', 'getPictures']),
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
    this.getPictures();
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
</style>
