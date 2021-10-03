import postApi from '../../../services/api/post';
import { postMutationsTypes, postActionsTypes } from './postTypes';

const postModule = {
  state: () => ({
    posts: [],
    isLoading: false,
  }),
  getters: {},
  mutations: {
    [postMutationsTypes.SET_POSTS](state, posts) {
      state.posts = posts;
    },
    [postMutationsTypes.SET_LOADING](state, bool) {
      state.isLoading = bool;
    },
    [postMutationsTypes.CREATE_POST](state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  actions: {
    [postActionsTypes.CREATE_POST](ctx, postData) {
      return new Promise((resolve) => {
        postApi
          .createPost(postData)
          .then(({ data }) => {
            ctx.commit(postMutationsTypes.CREATE_POST, data);
            resolve(data);
          })
          .catch(() => {
            alert('Ошибка при создании поста');
          });
      });
    },
    async [postActionsTypes.FETCH_POSTS]({ commit }) {
      try {
        commit(postMutationsTypes.SET_LOADING, true);
        const { data } = await postApi.fetchPosts();
        commit(postMutationsTypes.SET_POSTS, data);
      } catch (error) {
        alert('Ошибка при загрузке постов');
      } finally {
        commit(postMutationsTypes.SET_LOADING, false);
      }
    },
    [postActionsTypes.REMOVE_POST](ctx, id) {
      return new Promise((resolve) => {
        postApi
          .deletePost(id)
          .then((res) => {
            resolve(res);
          })
          .catch(() => alert('Ошибка при удалении поста'));
      });
    },
  },
};

export default postModule;
