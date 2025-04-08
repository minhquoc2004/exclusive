<template>
  <div class="not-found">
    <div class="not-found__wrrapper container">
      <nav class="not-found__breadcrumb">
        <span @click="navigateTo(PAGE.HOME)">Home</span> <span>/</span> <span>404 Error</span>
      </nav>
      <div class="not-found__content">
        <div class="not-found__title">404 Not Found</div>
        <p class="not-found__desc">Your visited page not found. You may go home page.</p>
        <div class="not-found__navigation">
          <BaseButton class="base-button--primary" :width="254" :height="56" @click="navigateTo(PAGE.HOME)">Back to home page</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/common/base-button.vue";
import { PAGE } from "~/config/page-url";

</script>

<style scoped lang="scss">
.not-found {
  padding: 80px 0 140px;

  &__breadcrumb {
    margin-bottom: 140px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000000;

    > span {
      opacity: 0.5;

      &:first-child {
        cursor: pointer;
      }

      &:nth-child(2) {
        padding: 0 12px;
      }

      &:last-child {
        opacity: 1;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 110px;
    font-weight: 500;
    line-height: 115px;
    letter-spacing: 0.03em;
    margin-bottom: 40px;
  }

  &__desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin-bottom: 80px;
  }
}
</style>
