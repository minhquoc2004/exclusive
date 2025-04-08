<template>
  <form @submit.prevent="submitForm" class="login-form">
    <h2 class="login-form__title">Log in to Exclusive</h2>
    <p class="login-form__desc">Enter your details below</p>
    <div class="login-form__input">
      <input name="email" type="text" v-model="form.emailOrPhone" placeholder="Email or Phone Number"  />
    </div>
    <div class="login-form__input">
      <input name="password" type="password" v-model="form.password" placeholder="Password"  />
    </div>
    <div class="login-form__action">
      <BaseButton class="base-button--primary" :height="56" :width="143" :disabled="isSubmitting" type="submit">Log In</BaseButton>
      <div class="forget-password" @click="handleForgetPassword()">Forget Password?</div>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/base-button.vue'
import { useLogin } from '~/composables/authentication/useLogin'

const { $toast } = useNuxtApp()
const { form, isSubmitting, submitForm } = useLogin()

const handleForgetPassword = () => {
  $toast.info('This feature is coming soon!')
}
</script>

<style lang="scss" scoped>
.login-form {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__title {
    font-size: 36px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.04em;
    margin-bottom: 24px;
  }

  &__desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 48px;
  }

  &__input {
    position: relative;
    height: 32px;
    margin-bottom: 40px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: #000000;
      opacity: 0.5;
    }

    > input {
      width: 100%;
      height: 100%;
      border: none;

      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }

      &:focus-visible {
        outline: none;
      }
    }
  }

  &__action {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .forget-password {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      cursor: pointer;
      color: #DB4444;
    }
  }
}
</style>