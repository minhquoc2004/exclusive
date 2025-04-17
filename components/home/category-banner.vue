<template>
  <section class="category-banner">
    <div class="container">
      <div class="category-banner__wrapper">
        <img
          src="/assets/images/home/category/banner.png"
          alt="category-banner"
        />
        <div class="category-banner__countdown">
          <div class="countdown">
            <div class="countdown__item">
              <span class="countdown__item--time">{{
                formatUnit(countdown.days)
              }}</span>
              <span class="countdown__item--unit">{{
                countdown.days >= 10 ? "Days" : "Day"
              }}</span>
            </div>
            <div class="countdown__item">
              <span class="countdown__item--time">{{
                formatUnit(countdown.hours)
              }}</span>
              <span class="countdown__item--unit">{{
                countdown.hours >= 10 ? "Hours" : "Hour"
              }}</span>
            </div>
            <div class="countdown__item">
              <span class="countdown__item--time">{{
                formatUnit(countdown.minutes)
              }}</span>
              <span class="countdown__item--unit">{{
                countdown.minutes >= 10 ? "Minutes" : "Minute"
              }}</span>
            </div>
            <div class="countdown__item">
              <span class="countdown__item--time">{{
                formatUnit(countdown.seconds)
              }}</span>
              <span class="countdown__item--unit">{{
                countdown.seconds >= 10 ? "Seconds" : "Second"
              }}</span>
            </div>
          </div>
        </div>
        <div class="category-banner__wrapper--buy-now">Buy Now!</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

const targetDate = ref(
  dayjs().day() === 0 ? dayjs().endOf("day") : dayjs().endOf("week")
);
const interval = ref<NodeJS.Timeout | undefined>(undefined);
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const updateCountdown = () => {
  const now = dayjs();
  const duration = targetDate.value.diff(now, "second");

  if (duration <= 0) {
    targetDate.value = dayjs().endOf("day");
  } else {
    const days = Math.floor(duration / (24 * 3600));
    const hours = Math.floor((duration % (24 * 3600)) / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    countdown.value = { days, hours, minutes, seconds };
  }
};

const formatUnit = (num: number) => {
  return num < 10 ? "0" + num : num.toString();
};

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
.category-banner {
  margin-bottom: 70px;

  &__wrapper {
    position: relative;
    cursor: pointer;

    > img {
      width: 100%;
    }

    .countdown {
      position: absolute;
      bottom: 165px;
      left: 56px;
      display: flex;
      justify-content: center;
      column-gap: 24px;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #fff;
        width: 62px;
        height: 62px;
        border-radius: 50%;

        &--time {
          font-size: 16px;
          line-height: 20px;
          font-weight: 600;
          color: #000000;
        }

        &--unit {
          font-size: 11px;
          line-height: 18px;
          font-weight: 400;
          color: #000000;
        }
      }
    }

    &--buy-now {
      position: absolute;
      bottom: 69px;
      left: 56px;
      padding: 16px 48px;
      background: #00ff66;
      color: #fafafa;
      cursor: pointer;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      border-radius: 4px;
      animation: colorBlink 1.5s infinite;
    }
  }
}

@keyframes colorBlink {
  0%,
  100% {
    background-color: #00ff66; /* Màu nền ban đầu */
  }
  50% {
    background-color: #ff66cc; /* Màu nền nổi bật khác */
  }
}
</style>
