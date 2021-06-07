<template>
    <div class="cards">
        <ul class="cards__list">
            <cardsItem/>
        </ul>
    </div>
</template>

<script>
import cardsItem from './cardsItem.vue';

export default {
  components: {
    cardsItem,
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
    }
}
</style>
