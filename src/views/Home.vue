<template>
  <post-list>
    <template v-if="!isloading && posts.length">
      <post-item
        v-for="post in posts"
        :author="post.user.username"
        :title="post.title"
        :description="post.description"
        :id="post.id"
        :onRemovePost="removePost"
        :key="post.id"
      />
    </template>
    <div v-if="!isLoading && !posts.length">Постов нет</div>
    <div v-if="isLoading">...Загрузка</div>
  </post-list>
</template>

<script>
import PostList from '@/components/PostList';
import PostItem from '@/components/PostItem';

import { postActionsTypes } from '@/store/modules/post/postTypes';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    PostItem,
    PostList,
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions({
      fetchPosts: postActionsTypes.FETCH_POSTS,
    }),
  },

  computed: {
    ...mapState({
      posts: ({ post }) => post.posts,
      isLoading: ({ post }) => post.isLoading,
    }),
  },

  mounted() {
    this.fetchPosts();
  },
};
</script>

<style></style>
