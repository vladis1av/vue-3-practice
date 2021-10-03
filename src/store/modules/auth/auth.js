import authApi from '@/services/api/auth';
import { authMutationsTypes, authActionsTypes } from './authTypes';

const authModule = {
  state: {
    currentUser: null,
    errors: null,
    isSubmiting: false,
    isAuth: false,
    isLoading: false,
  },

  mutations: {
    [authMutationsTypes.REGISTER_START](state) {
      state.isSubmiting = true;
      state.errors = null;
    },
    [authMutationsTypes.REGISTER_SUCCESS](state, userData) {
      state.isSubmiting = false;
      state.currentUser = userData;
      state.isAuth = true;
    },
    [authMutationsTypes.REGISTER_FAILURE](state, errors) {
      state.isSubmiting = false;
      state.errors = errors;
    },

    [authMutationsTypes.LOGIN_START](state) {
      state.isSubmiting = true;
      state.errors = null;
    },
    [authMutationsTypes.LOGIN_SUCCESS](state, userData) {
      state.isSubmiting = false;
      state.currentUser = userData;
      state.isAuth = true;
    },
    [authMutationsTypes.LOGIN_FAILURE](state, errors) {
      state.isSubmiting = false;
      state.errors = errors;
    },

    [authMutationsTypes.LOGIN_FAILURE](state, errors) {
      state.isSubmiting = false;
      state.errors = errors;
    },

    [authMutationsTypes.GET_CURRENT_USER_START](state) {
      state.isLoading = true;
    },
    [authMutationsTypes.GET_CURRENT_USER_SUCCESS](state, userData) {
      state.isLoading = false;
      state.currentUser = userData;
      state.isAuth = true;
    },
    [authMutationsTypes.GET_CURRENT_USER_FAILURE](state) {
      state.isLoading = false;
      state.isAuth = false;
      state.currentUser = null;
    },
    [authMutationsTypes.LOGOUT](state) {
      state.isAuth = false;
      state.currentUser = null;
    },
  },

  actions: {
    [authActionsTypes.SIGN_UP](ctx, userData) {
      return new Promise((resolve) => {
        ctx.commit(authMutationsTypes.LOGIN_START);
        authApi
          .signUp(userData)
          .then((res) => {
            console.log(res);
            ctx.commit(authMutationsTypes.LOGIN_SUCCESS, res.data.user);
            window.localStorage.setItem('token', res.data.jwt);
            resolve(res.data.user);
          })
          .catch((res) => {
            ctx.commit(
              authMutationsTypes.LOGIN_FAILURE,
              res.response.data.errors,
            );
          });
      });
    },
    [authActionsTypes.SIGN_IN](ctx, userData) {
      return new Promise((resolve) => {
        ctx.commit(authMutationsTypes.REGISTER_START);
        authApi
          .signIn(userData)
          .then((res) => {
            ctx.commit(authMutationsTypes.REGISTER_SUCCESS, res.data.user);
            window.localStorage.setItem('token', res.data.jwt);
            resolve(res.data.user);
          })
          .catch((res) => {
            ctx.commit(
              authMutationsTypes.REGISTER_FAILURE,
              res.response.data.errors,
            );
          });
      });
    },
    [authActionsTypes.GET_CURRENT_USER](ctx) {
      return new Promise((resolve) => {
        ctx.commit(authMutationsTypes.GET_CURRENT_USER_START);
        authApi
          .fetchCurrentUser()
          .then((res) => {
            ctx.commit(authMutationsTypes.GET_CURRENT_USER_SUCCESS, res.data);
            resolve(res.data);
          })
          .catch(() => {
            ctx.commit(authMutationsTypes.GET_CURRENT_USER_FAILURE);
          });
      });
    },
  },
};

export default authModule;
