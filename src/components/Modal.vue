<template>
  <div class="modal" @click="hideModal" @click.stop="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  components: {},
  props: {},
  methods: {
    hideModal() {
      this.$emit('hideModal');
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);

  &__content {
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    max-width: 880px;
    max-height: 500px;

    &__top {
      padding: 15px;
    }
  }
}
</style>
