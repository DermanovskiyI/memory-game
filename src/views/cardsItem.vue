<template>
    <li class="cards__item">
       <div class="cards__flip">
           <div class="cards__flip-inner">
               <div class="cards__flip-front">
                   <div class="cards__flip-front-pic">
                        <img src="../assets/cat.png" alt="cat" class="cards__flip-front-pic-img">
                   </div>
                </div>
                <div class="flip-card-back">
                    <img src="../assets/photo.png" alt="Avatar" style="width:300px;height:300px;">
                </div>
           </div>
       </div>
    </li>
</template>

<style lang="scss" scoped>

.cards__flip {
  background-color: transparent;
  width: 300px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;

  &-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  &:hover &-inner {
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
  &-front-pic-img {
    max-width: 100%;
  }
  &-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }
}

</style>
