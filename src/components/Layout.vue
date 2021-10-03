<template>
  <div class="wrapper">
    <template v-if="isLoading">
      ...Загрузка
    </template>
    <template v-else>
      <Header />
      <div class="main-content">
        <Sidebar />
        <slot></slot>
        <Comments />
      </div>
    </template>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Comments from '@/components/Comments';
import { mapState } from 'vuex';

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar,
    Comments,
  },
  computed: {
    ...mapState({
      isLoading: ({ auth }) => auth.isLoading,
    }),
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
}

.main-content {
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  padding-top: 60px;
  height: 100%;
}
</style>
