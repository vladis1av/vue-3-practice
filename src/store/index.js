import { createStore } from 'vuex';
import { post, auth } from './modules';

export default createStore({
  modules: {
    auth,
    post,
  },
});
