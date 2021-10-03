<template>
  <aside class="sidebar">
    <div class="sidebar__list">
      <router-link
        exact
        class="link"
        active-class="link--active"
        :to="{ name: 'home' }"
        >Лента</router-link
      >
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
};
</script>

<style scoped lang="scss">
.sidebar {
  padding: 15px 10px;
  max-width: 220px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  &__list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

.link {
  max-width: 200px;
  width: 100%;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  height: 44px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  border: none;
  color: #000;
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  padding: 15px;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  &--active {
    background-color: #fff;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>
