<template>
  <div class="auth__container">
    <h1>Войти</h1>
    <validation-errors
      v-if="validationErrors"
      :validationErrors="validationErrors"
    />
    <form class="auth-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <it-input
          type="email"
          v-model="identifier"
          prefix-icon="email"
          placeholder="E-mail"
        />
      </div>
      <div class="form-group">
        <it-input
          type="password"
          v-model="password"
          prefix-icon="lock"
          placeholder="Пароль"
        />
      </div>
      <div class="form-bottom">
        <it-button class="form-bottom__link" @click="signUpOpen" text
          >Зарегистрироваться</it-button
        >
        <it-button :disabled="isSubmiting" block :loading="isSubmiting"
          >Войти</it-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors';
import { authActionsTypes } from '@/store/modules/auth/authTypes';
import { mapState } from 'vuex';

export default {
  name: 'SignIn',
  components: {
    ValidationErrors,
  },
  props: {
    signUpOpen: {
      type: Function,
    },
  },
  data() {
    return {
      identifier: '',
      password: '',
    };
  },
  computed: {
    ...mapState({
      isSubmiting: ({ auth }) => auth.isSubmiting,
      validationErrors: ({ auth }) => auth.errors,
    }),
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(authActionsTypes.SIGN_IN, {
          identifier: this.identifier,
          password: this.password,
        })
        .then(() => {
          (this.identifier = ''), (this.password = '');
          this.$router.push({ name: 'home' });
        });
    },
  },
};
</script>
