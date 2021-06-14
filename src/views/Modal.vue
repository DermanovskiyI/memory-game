<template>
  <div class="modal" v-show="showModal">
      <div class="modal__content">
        <div class="modal__text">ВЫ ПРОШЛИ УРОВЕНЬ!!!!</div>
        <button type="button" class="modal__btn" @click="hideModal">Следующий уровень</button>
      </div>
  </div>
</template>
<script>

export default {
  props: {
    showModal: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('hideModal');
    },
  },
};
</script>
<style lang="scss">
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
