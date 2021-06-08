<template>
  <div class="cards">
      <ul class="cards__list">
          <cardsItem
              v-for="picture in pictures"
              :key="picture.id"
              :picture="picture"
          />
      </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import cardsItem from './cardsItem.vue';

export default {
  components: {
    cardsItem,
  },
  computed: {
    ...mapState({
      pictures: (state) => state.pictures,
    }),
  },
  methods: {
    ...mapActions(['uploadPictures']),
  },
  created() {
    this.uploadPictures();
  },
};
</script>

<style lang="scss">
.cards {
  padding-top: 100px;
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px 50px;
        border: 1px solid black;
    }
}
</style>
