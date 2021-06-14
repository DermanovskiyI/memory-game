<template>
  <li class="cards__item" @click="flipCard(picture)">
      <div class="cards__flip" :class="[picture.showPic ? 'cards__flip--active' : '']">
          <div class="cards__flip-inner">
              <div class="cards__flip-front">
                  <div class="cards__flip-front-pic">
                      <img src="../assets/cat.png" alt="cat" class="cards__flip-front-pic-img"  draggable="false">
                  </div>
              </div>
              <div class="cards__flip-back">
                  <img :src="picture.webformatURL" alt="pic" draggable="false">
              </div>
          </div>
      </div>
  </li>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    picture: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState({
      pic: (state) => state.idForCompare,
      cardCounter: (state) => state.cardCounter,
    }),
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    ...mapMutations(['SHOW_PICTURES']),
    flipCard(picture) {
      if (!picture.showPic && this.cardCounter < 2) {
        this.SHOW_PICTURES(picture);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cards__item {
  margin: 10px;
  cursor: pointer;
}

.cards__flip {
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  user-select: none;

  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &--active &-inner {
    transform: rotateY(180deg);
  }

  &-front, &-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  &-front {
    background-color: #bbb;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
    display: flex;
  }
}

</style>
