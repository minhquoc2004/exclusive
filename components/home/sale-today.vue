<template>
  <section class="flash-sales">
    <div class="container">
      <div class="flash-sales__wrapper">
        <BaseTitle title="Today’s" />
        <div class="flash-sales__title">
          <div class="flash-sales__title--wrapper">
            <h3>Flash Sales</h3>
            <div class="countdown">
              <div class="countdown__item">
                <span class="countdown__item--unit">{{
                  countdown.days >= 10 ? "Days" : "Day"
                }}</span>
                <span class="countdown__item--time">{{
                  formatUnit(countdown.days)
                }}</span>
              </div>
              <div class="countdown__dot">:</div>
              <div class="countdown__item">
                <span class="countdown__item--unit">{{
                  countdown.hours >= 10 ? "Hours" : "Hour"
                }}</span>
                <span class="countdown__item--time">{{
                  formatUnit(countdown.hours)
                }}</span>
              </div>
              <div class="countdown__dot">:</div>
              <div class="countdown__item">
                <span class="countdown__item--unit">{{
                  countdown.minutes >= 10 ? "Minutes" : "Minute"
                }}</span>
                <span class="countdown__item--time">{{
                  formatUnit(countdown.minutes)
                }}</span>
              </div>
              <div class="countdown__dot">:</div>
              <div class="countdown__item">
                <span class="countdown__item--unit">{{
                  countdown.seconds >= 10 ? "Seconds" : "Second"
                }}</span>
                <span class="countdown__item--time">{{
                  formatUnit(countdown.seconds)
                }}</span>
              </div>
            </div>
          </div>
          <div class="button-swiper">
            <span type="button" class="flash-sale__btn-prev" />
            <span type="button" class="flash-sale__btn-next" />
          </div>
        </div>
        <template v-if="data?.products && data.products.length">
          <div class="flash-sales__products">
            <client-only>
              <Swiper v-bind="swiperConfig" class="product-swiper">
                <SwiperSlide v-for="product in data.products" :key="product.id">
                  <Card :card="product" />
                </SwiperSlide>
              </Swiper>
            </client-only>
          </div>
          <div class="flash-sales__view-all">
            <BaseButton class="base-button--primary" :width="234" :height="56">View All Products</BaseButton>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import BaseTitle from "../common/base-title.vue";
import Card from "~/components/common/card.vue";
import BaseButton from "~/components/common/base-button.vue";

const interval = ref<ReturnType<typeof setInterval> | undefined>(undefined);
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
const targetDate = ref(dayjs().endOf("month"));
const swiperConfig = reactive({
  initialSlide: 0,
  slidesPerView: 4.5,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".flash-sale__btn-next",
    prevEl: ".flash-sale__btn-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Navigation],
});

const formatUnit = (num: number) => {
  return num < 10 ? "0" + num : num.toString();
};

const updateCountdown = () => {
  const now = dayjs();
  const duration = targetDate.value.diff(now, "second");

  if (duration <= 0) {
    targetDate.value = dayjs().endOf("month");
  } else {
    const days = Math.floor(duration / (24 * 3600));
    const hours = Math.floor((duration % (24 * 3600)) / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    countdown.value = { days, hours, minutes, seconds };
  }
};

const { data } = await useFetch('/api/product', {
  method: 'get',
  query: {
    page: 1,
    limit: 20,
    category: 'flash-sales',
  },
});

onMounted(() => {
  updateCountdown();
  interval.value = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});
</script>

<style lang="scss" scoped>
.flash-sales {
  margin-bottom: 80px;
  .container {
    overflow: visible;
  }

  &__wrapper {
    position: relative;
    padding-bottom: 60px;

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
    align-items: flex-end;
    margin-bottom: 40px;

    &--wrapper {
      display: flex;
      align-items: flex-end;
      column-gap: 87px;
    }

    > h3 {
      font-size: 36px;
      line-height: 48px;
      font-weight: 600;
      color: #000000;
    }

    .countdown {
      display: flex;
      align-items: flex-end;
      column-gap: 17px;

      &__item {
        display: flex;
        flex-direction: column;
        row-gap: 4px;

        &--unit {
          font-size: 12px;
          line-height: 18px;
          font-weight: 500;
          color: #000000;
        }

        &--time {
          font-size: 32px;
          line-height: 30px;
          font-weight: 700;
          color: #000000;
        }
      }

      &__dot {
        font-size: 26px;
        line-height: 30px;
        font-weight: 700;
        color: #e07575;
        padding-bottom: 6px;
      }
    }

    .button-swiper {
      display: flex;
      column-gap: 8px;
      .flash-sale__btn-prev,
      .flash-sale__btn-next {
        position: relative;
        width: 46px;
        height: 46px;
        background: #f5f5f5;
        border-radius: 50%;
        cursor: pointer;
      }

      .flash-sale__btn-prev::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        background: url("/assets/images/common/icon-arrow.png") no-repeat;
      }

      .flash-sale__btn-next::before {
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

  &__products {
    position: relative;
    // 1146 = 1170 (container width) - 24 (padding left and right)
    width: calc(100vw - (100vw - 1146px) / 2);
  }

  &__view-all {
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }
}
</style>
