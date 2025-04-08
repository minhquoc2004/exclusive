<template>
  <form @submit.prevent="submitForm" class="register-form">
    <h2 class="register-form__title">Create an account</h2>
    <p class="register-form__desc">Enter your details below</p>
    <div class="register-form__input">
      <input name="name" type="text" v-model="form.name" placeholder="Name"  />
    </div>
    <div class="register-form__input">
      <input name="email" type="text" v-model="form.emailOrPhone" placeholder="Email or Phone Number"  />
    </div>
    <div class="register-form__input">
      <input name="password" type="password" v-model="form.password" placeholder="Password"  />
    </div>
    <BaseButton class="base-button--primary" :height="56" :disabled="isSubmitting" type="submit">Create Account</BaseButton>
    <a href="https://mail.google.com" target="_blank" class="register-form__button-google" >
      <img src="/assets/images/authentication/icon-google.png" alt="icon-google" />
      <span>Sign up with Google</span>
    </a>
    <div class="register-form__login">
      <p>Already have account?</p>
      <div class="login-text" @click="emit('log-in')">Log in</div>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/base-button.vue'
import { useRegister } from '~/composables/authentication/useRegister'

const { form, isSubmitting, submitForm } = useRegister()
const emit = defineEmits(['log-in'])
</script>

<style lang="scss" scoped>
.register-form {
  margin-top: 125px;
  
  &__title {
    font-size: 36px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 24px;
  }

  &__desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #000000;
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

  &__button-google {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    margin: 16px 0 32px;
    border: 1px solid #00000066;
    border-radius: 4px;

    > img {
      width: 24px;
    }

    > span {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #000000;
    }
  }

  &__login {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;

    > p {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #000000;
      opacity: 0.7;
    }

    .login-text {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #000000;
      position: relative;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        border: 1px solid #000000;
        opacity: 0.3;
      }
    }
  }
}
</style>