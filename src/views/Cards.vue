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

<style lang="scss" scoped>

</style>
