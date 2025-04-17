<template>
  <section class="main-cateogry">
    <div class="container">
      <div class="main-cateogry__wrapper">
        <div class="main-cateogry__left">
          <div class="menu">
            <div class="menu__item">
              Woman’s Fashion
              <img
                src="/assets/images/common/icon-dropdown.png"
                alt="arrow-icon"
              />
            </div>
            <div class="menu__item">
              Men’s Fashion
              <img
                src="/assets/images/common/icon-dropdown.png"
                alt="arrow-icon"
              />
            </div>
            <div class="menu__item">Electronics</div>
            <div class="menu__item">Home & Lifestyle</div>
            <div class="menu__item">Medicine</div>
            <div class="menu__item">Sports & Outdoor</div>
            <div class="menu__item">Baby’s & Toys</div>
            <div class="menu__item">Groceries & Pets</div>
            <div class="menu__item">Health & Beauty</div>
          </div>
        </div>
        <div class="main-cateogry__right">
          <client-only>
            <Swiper
              v-if="data?.banner && data.banner.length"
              v-bind="swiperConfig"
              class="banner-swiper"
            >
              <SwiperSlide v-for="item in data.banner" :key="item.id">
                <img :src="item.image" :alt="`banner-${item.id}`" />
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
import { Pagination, Autoplay } from "swiper/modules";

const swiperConfig = reactive({
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  pagination: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Pagination],
});

const { data } = await useFetch('/api/banner', {
  method: 'get',
});
</script>

<style lang="scss" scoped>
.main-cateogry {
  margin-bottom: 140px;
  &__wrapper {
    display: grid;
    grid-template-columns: 233px 1fr;
    column-gap: 45px;
  }

  &__left {
    position: relative;
    padding-top: 40px;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 0.5px;
      height: 100%;
      background: #000000;
      opacity: 30%;
    }

    .menu {
      .menu__item {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 18px;

        > img {
          width: 24px;
          height: auto;
        }

        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
    }
  }

  &__right {
    padding-top: 40px;
    overflow: hidden;
    .banner-swiper {
      :deep(img) {
        width: 100%;
        height: 344px;
        cursor: pointer;
      }

      :deep(.swiper-pagination) {
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ffffff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          border: 2px solid #ffffff;
          background: #db4444;
          opacity: 1;
        }
      }
    }
  }
}
</style>
