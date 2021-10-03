<template>
  <div class="post-wrapper">
    <div class="post">
      <template v-if="isLoaded && post">
        <span class="post__author"
          >Автор статьи: {{ this.post.user.username }}</span
        >
        <my-button
          v-if="currentUser && post.user.id === currentUser.id"
          @click="deletePost($route.params.id)"
          red
          >Удалить</my-button
        >
        <div class="post__info">
          <h1>{{ this.post.title }}</h1>
          <div class="post__info__text">
            <p>{{ this.post.description }}</p>
          </div>
        </div>
        <div class="post__image">
          <img
            v-if="post.image"
            :src="'http://localhost:1337' + post.image.url"
            alt="post image"
          />
        </div>
      </template>
      <div v-if="!isLoaded">...Загрузка</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { postActionsTypes } from '@/store/modules/post/postTypes';
import MyButton from '@/components/UI/MyButton';
import postApi from '@/services/api/post';

export default {
  components: { MyButton },
  data() {
    return {
      post: null,
      isLoaded: false,
    };
  },
  methods: {
    ...mapActions({
      removePost: postActionsTypes.REMOVE_POST,
    }),
    deletePost(id) {
      this.removePost(id).then(() => {
        this.$router.push({ name: 'home' });
      });
    },
    async fetchPostsById(id) {
      try {
        this.isLoaded = false;
        const { data } = await postApi.fetchPostsById(id);
        this.post = data;
      } catch (error) {
        alert('Произошла ошибка при загрузке поста:', error);
      } finally {
        this.isLoaded = true;
      }
    },
  },
  computed: {
    ...mapState({
      currentUser: ({ auth }) => auth.currentUser,
    }),
  },
  mounted() {
    this.fetchPostsById(this.$route.params.id);
  },
};
</script>

<style csoped lang="scss">
.post-wrapper {
  max-width: 720px;
  width: 100%;
  background-color: #fff;
}
.post {
  &__author {
    margin-top: 15px;
    margin-right: auto;
    display: flex;
    padding: 20px;
  }
  &__info {
    padding: 20px;
    margin-top: 10px;
    &__text {
      margin-top: 10px;
    }
  }
  &__image {
    overflow: hidden;
    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
