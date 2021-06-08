<template>
    <div class="cards">
        <button @click="test">push</button>
        <!-- <pre>{{pictures}}</pre> -->
        <ul class="cards__list">
            <cardsItem/>
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
    ...mapActions(['fetchPictures']),
    test() {
      this.fetchPictures();
    },
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
