<template>
  <header class="header">
    <div class="header__container">
      <my-button style="margin: 0 auto;" border @click="showModal"
        >Новая запись</my-button
      >
      <Modal v-if="modalIsVisible" @hideModal="hideModal">
        <template v-if="!isAuth && modalIsVisible">
          <SignUp v-if="!signInForm" :signInOpen="toggleAuthForm" />
          <SignIn v-if="signInForm" :signUpOpen="toggleAuthForm" />
        </template>
        <CreatePostForm
          v-if="isAuth && modalIsVisible"
          @createPost="createPost"
        />
      </Modal>
      <div class="user-bar">
        <div v-if="isAuth">
          <span>{{ currentUser.username }}</span>
        </div>
        <my-button
          style="margin: 0 auto;"
          outline
          @click="isAuth ? onLogout() : showModal()"
          >{{ isAuth ? 'выйти' : 'войти' }}</my-button
        >
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { postActionsTypes } from '@/store/modules/post/postTypes';
import { authMutationsTypes } from '@/store/modules/auth/authTypes';

import Modal from '@/components/Modal';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import CreatePostForm from '@/components/CreatePostForm';
import MyButton from '@/components/UI/MyButton';

export default {
  name: 'Header',
  components: {
    Modal,
    SignIn,
    SignUp,
    CreatePostForm,
    MyButton,
  },
  data() {
    return {
      signInForm: true,
      modalIsVisible: false,
    };
  },
  methods: {
    ...mapActions({
      sendPost: postActionsTypes.CREATE_POST,
    }),
    ...mapMutations({
      logout: authMutationsTypes.LOGOUT,
    }),
    createPost(post) {
      this.sendPost(post).then(() => (this.modalIsVisible = false));
    },
    toggleAuthForm() {
      this.signInForm = !this.signInForm;
    },
    showModal() {
      this.modalIsVisible = true;
    },
    hideModal() {
      this.modalIsVisible = false;
    },
    onLogout() {
      this.logout();
      window.localStorage.removeItem('token');
    },
  },
  computed: {
    ...mapState({
      currentUser: ({ auth }) => auth.currentUser,
      isAuth: ({ auth }) => auth.isAuth,
    }),
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  background-color: #d9f5ff;
  top: 0;

  &__container {
    padding: 0 15px;
    max-width: 1280px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
  }
}

.user-bar {
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin-right: 10px;
  }
}
</style>
