<template>
  <div class="main">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/header/index.vue";
import Footer from "~/components/footer/index.vue";
</script>

<style lang="scss" scoped></style>
