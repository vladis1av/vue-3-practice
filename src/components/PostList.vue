<template>
  <div class="post-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PostList',
};
</script>

<style scoped lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  align-items: center;
  padding-top: 15px;
}
</style>
