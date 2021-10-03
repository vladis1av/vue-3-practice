<template>
  <div class="comments-block">
    <div class="comments-block__title">
      <span>Комментарии {{ '>' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
};
</script>

<style scoped lang="scss">
.comments-block {
  max-width: 320px;
  width: 100%;
  height: 100%;
  &__title {
    height: 74px;
    padding-left: 30px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 26px;
    font-weight: bold;
  }
}
</style>
