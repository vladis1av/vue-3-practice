<template>
  <div class="post-form">
    <div class="form-group">
      <it-input type="email" v-model="post.title" placeholder="Заголовок" />
    </div>
    <div class="form-group">
      <it-input
        type="email"
        v-model="post.description"
        placeholder="Описание"
      />
    </div>
    <it-button type="primary" @click="createPost" text>Опубликовать</it-button>
  </div>
</template>

<script>
export default {
  name: 'CreatePostForm',
  components: {},
  data() {
    return {
      post: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    createPost() {
      this.$emit('createPost', this.post);
      this.post = {
        title: '',
        description: '',
      };
    },
  },
};
</script>

<style scoped lang="scss">
.post-form {
  height: 300px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
