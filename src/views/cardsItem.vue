<template>
    <li class="cards__item" @click="flipCard">
       <div class="cards__flip" :class="[active ? 'cards__flip--active' : '']">
           <div class="cards__flip-inner">
               <div class="cards__flip-front">
                   <div class="cards__flip-front-pic">
                        <img src="../assets/cat.png" alt="cat" class="cards__flip-front-pic-img">
                   </div>
                </div>
                <div class="cards__flip-back">
                    <img :src="picture.webformatURL" alt="pic">
                </div>
           </div>
       </div>
    </li>
</template>

<script>
export default {
  props: {
    picture: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    flipCard() {
      this.active = !this.active;
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
  width: 250px;
  height: 250px;
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
