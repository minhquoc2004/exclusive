<template>
  <div class="authentication">
    <div class="authentication__banner">
      <img src="/assets/images/authentication/banner.png" alt="banner" />
    </div>
    <div class="authentication__form">
      <LoginForm v-if="isLoginForm" />
      <RegisterForm v-else @log-in="isLoginForm = true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterForm from '~/components/authentication/register-form.vue';
import LoginForm from '~/components/authentication/login-form.vue';

const isLoginForm = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.authentication {
  display: grid;
  grid-template-columns: 805px 1fr;
  gap: 128px;
  width: calc(100vw - (100vw - 1146px) / 2);
}
</style>