<template>
  <section class="category">
    <div class="container">
      <div class="category__wrapper">
        <BaseTitle title="Categories" />
        <div class="category__title">
          <h3>Browse By Category</h3>
          <div class="button-swiper">
            <span type="button" class="category__btn-prev" />
            <span type="button" class="category__btn-next" />
          </div>
        </div>
        <div class="category__list">
          <client-only>
            <Swiper v-bind="swiperConfig" class="product-swiper">
              <SwiperSlide
                v-for="category in [categories[1], ...categories]"
                :key="category.id"
              >
                <div class="category-item">
                  <img :src="category.img" :alt="category.name" />
                  <div class="category-item__name">{{ category.name }}</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import BaseTitle from "~/components/common/base-title.vue";
import { categories } from "~/resources/home-category";

const swiperConfig = reactive({
  initialSlide: 1,
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".category__btn-next",
    prevEl: ".category__btn-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Navigation],
});
</script>

<style lang="scss" scoped>
.category {
  margin-bottom: 70px;
  &__wrapper {
    position: relative;
    padding-bottom: 70px;

    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.5px;
      background: #000000;
      opacity: 0.3;
    }
  }

  &__title {
    display: flex;
    justify-content: space-between;
    > h3 {
      font-size: 36px;
      line-height: 48px;
      font-weight: 600;
      color: #000000;
      letter-spacing: 4%;
      margin-bottom: 60px;
    }

    .button-swiper {
      display: flex;
      column-gap: 8px;
      .category__btn-prev,
      .category__btn-next {
        position: relative;
        width: 46px;
        height: 46px;
        background: #f5f5f5;
        border-radius: 50%;
        cursor: pointer;
      }

      .category__btn-prev::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        background: url("/assets/images/common/icon-arrow.png") no-repeat;
      }

      .category__btn-next::before {
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

  &__list {
    .category-item {
      cursor: pointer;
      position: relative;
      text-align: center;
      border: 1px solid #0000004d;
      padding: 25px 0 24px;
      border-radius: 4px;

      > img {
        width: 56px;
        height: 56px;
        margin-bottom: 16px;
      }

      &__name {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #000000;
      }

      &:hover {
        border: none;
        background: #db4444;

        .category-item__name {
          color: #fff;
        }

        > img {
          filter: invert(1);
        }
      }
    }
  }
}
</style>
