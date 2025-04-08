<template>
  <h2 class="base-title">
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.base-title {
  position: relative;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #db4444;
  padding-left: 36px;
  margin-bottom: 23px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: 40px;
    background: currentColor;
    transform: translateY(-50%);
  }
}
</style>
