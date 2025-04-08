<template>
  <section class="explore-product">
    <div class="container explore-product__wrapper">
      <BaseTitle title="Our Products" />
      <div class="explore-product__title">
        <h3>Explore Our Products</h3>
        <div class="button-swiper">
          <span type="button" class="explore-product__btn-prev" />
          <span type="button" class="explore-product__btn-next" />
        </div>
      </div>
      <div v-if="products && products.length" class="explore-product__list">
        <client-only>
          <Swiper v-bind="swiperConfig" class="product-swiper">
            <SwiperSlide v-for="product in products" :key="product.id">
              <Card :card="product" />
            </SwiperSlide>
          </Swiper>
        </client-only>
      </div>
      <div v-if="products && products.length" class="explore-product__view-all">
        <BaseButton class="base-button--primary" :width="234" :height="56">View All Products</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Grid } from "swiper/modules";
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
  grid: {
    rows: 2,
    fill: "row",
  },
  navigation: {
    nextEl: ".explore-product__btn-next",
    prevEl: ".explore-product__btn-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Navigation, Grid],
});

onMounted(() => {
  getProducts("explore");
});
</script>

<style lang="scss" scoped>
.explore-product {
  margin-bottom: 140px;

  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;

    &--wrapper {
      display: flex;
      align-items: center;
      column-gap: 87px;
      margin-bottom: 40px;
    }

    > h3 {
      font-size: 36px;
      line-height: 48px;
      font-weight: 600;
      color: #000000;
    }

    .button-swiper {
      display: flex;
      column-gap: 8px;
      .explore-product__btn-prev,
      .explore-product__btn-next {
        position: relative;
        width: 46px;
        height: 46px;
        background: #f5f5f5;
        border-radius: 50%;
        cursor: pointer;
      }

      .explore-product__btn-prev::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        background: url("/assets/images/common/icon-arrow.png") no-repeat;
      }

      .explore-product__btn-next::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(180deg);
        width: 24px;
        height: 24px;
        background: url("/assets/images/common/icon-arrow.png") no-repeat;
      }
    }
  }

  &__view-all {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
}
</style>
