<template>
  <div class="auth__container">
    <h1>Регистрация</h1>
    <validation-errors
      v-if="validationErrors"
      :validationErrors="validationErrors"
    />
    <form class="auth-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <it-input
          type="text"
          v-model="username"
          prefix-icon="person"
          placeholder="Имя пользователя"
        />
      </div>
      <div class="form-group">
        <it-input
          type="email"
          v-model="email"
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
        <it-button class="form-bottom__link" @click="signInOpen" text
          >Уже есть аккаунт</it-button
        >
        <it-button :disabled="isSubmiting" :loading="isSubmiting"
          >Зарегистрироваться</it-button
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
  name: 'SignUp',
  components: {
    ValidationErrors,
  },
  props: {
    signInOpen: {
      type: Function,
    },
  },
  data() {
    return {
      username: '',
      email: '',
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
        .dispatch(authActionsTypes.SIGN_UP, {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          (this.username = ''), (this.email = ''), (this.password = '');
          this.$router.push({ name: 'home' });
        });
    },
  },
};
</script>

<style lang="scss">
.auth__container {
  width: 350px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 10px;
  }
}
.auth-form {
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.form-group {
  margin-bottom: 10px;
}

.form-bottom {
  display: flex;
  &__link {
    margin-right: 10px;
    max-width: 150px;
    width: 100%;
  }
}
</style>
