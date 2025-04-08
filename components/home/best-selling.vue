<template>
  <section class="best-selling">
    <div class="container best-selling__wrapper">
      <BaseTitle title="This Month" />
      <div class="best-selling__title">
        <h3>Best Selling Products</h3>
        <div class="view-all">
          <BaseButton class="base-button--primary" :width="159" :height="56">View All</BaseButton>
        </div>
      </div>
      <div class="best-selling__list">
        <client-only>
          <Swiper v-bind="swiperConfig" class="product-swiper">
            <SwiperSlide v-for="product in products" :key="product.id">
              <Card :card="product" />
            </SwiperSlide>
          </Swiper>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import BaseTitle from "~/components/common/base-title.vue";
import Card from "~/components/common/card.vue";
import BaseButton from "~/components/common/base-button.vue";
import { useProduct } from "~/composables/useProduct";

const { products, getProducts } = useProduct();

const swiperConfig = reactive({
  initialSlide: 0,
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
});

onMounted(() => {
  getProducts("best-selling");
});
</script>

<style lang="scss" scoped>
.best-selling {
  margin-bottom: 140px;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;

    > h3 {
      font-size: 36px;
      line-height: 48px;
      font-weight: 600;
      color: #000000;
      letter-spacing: 0.04;
    }
  }
}
</style>
