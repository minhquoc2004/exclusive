<template>
  <div class="star-rating">
    <img
      v-for="n in fullStars"
      :key="'full-' + n"
      src="/assets/images/common/star-yellow.svg"
      alt="star"
    />
    <img
      v-if="hasHalfStar"
      src="/assets/images/common/star-half.svg"
      alt="star"
    />
    <img
      v-for="n in emptyStars"
      :key="'empty-' + n"
      src="/assets/images/common/star-gray.svg"
      aalt="star"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rating: number;
  }>(),
  {
    rating: 0,
  }
);

const fullStars = computed(() => Math.floor(props.rating));
const hasHalfStar = computed(() => props.rating % 1 !== 0);
const emptyStars = computed(() => 5 - Math.ceil(props.rating));
</script>

<style lang="scss" scoped>
.star-rating {
  > img {
    width: 20px;
    height: 20px;
  }
}
</style>
