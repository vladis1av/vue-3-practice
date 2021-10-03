<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import { authActionsTypes } from '@/store/modules/auth/authTypes';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Layout,
  },
  computed: {
    ...mapState({
      currentUser: ({ auth }) => auth.currentUser,
      isAuth: ({ auth }) => auth.isAuth,
    }),
  },
  mounted() {
    this.$store.dispatch(authActionsTypes.GET_CURRENT_USER);
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

body {
  background-color: #f2f2f2;
  font-weight: 400;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
