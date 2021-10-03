<template>
  <div class="post-list__item">
    <div class="post-list__item__link" @click="$router.push(`/post/${id}`)">
      <span class="post-list__item__author">{{ author }}</span>
      <div class="post-list__item__info">
        <div class="post-list__item__info__title">
          <h3>{{ title }}</h3>
        </div>
        <div class="post-list__item__info__descr">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  components: {},
  props: {
    title: String,
    description: String,
    id: String,
    author: String,
  },
};
</script>

<style scoped lang="scss">
.post-list__item {
  border-radius: 8px;
  background-color: white;
  padding: 10px;
  margin-bottom: 28px;
  max-width: 650px;
  width: 100%;
  transition: box-shadow 170ms ease;
  &__author {
    margin-right: auto;
  }
  &__link {
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    transition: box-shadow 170ms ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &__info__title {
    font-size: 22px;
  }
}
</style>
