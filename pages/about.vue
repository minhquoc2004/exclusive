<template>
  <section class="about">
    <div class="about__breadcrumb">
      <div class="container">
        <nuxt-link :to="PAGE.HOME"> <span>Home</span> </nuxt-link>
        <span>/</span>
        <span class="about__breadcrumb--current-tab">About</span>
      </div>
    </div>
    <div class="about__content">
      <div class="our-story">
        <h3 class="our-story__title">Our Story</h3>
        <div class="our-story__desc">
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>
      <img src="/assets/images/about/girls.png" alt="girls" />
    </div>
    <div class="container">
      <div class="about__services">
        <div v-for="service in services" :key="service.id" class="service">
          <img :src="service.icon" alt="icon" />
          <p class="service__amount">{{ service.amount }}k</p>
          <p class="service__desc">{{ service.desc }}</p>
        </div>
      </div>
      <section class="about__team-members">
        <client-only>
          <Swiper v-bind="swiperConfig" class="team-members-swiper">
            <SwiperSlide
              v-for="member in teamMembers"
              :key="member.name"
              class="team-member"
            >
              <img
                :src="member.image"
                :alt="member.name"
                class="team-member__image"
              />
              <h3 class="team-member__name">{{ member.name }}</h3>
              <p class="team-member__position">{{ member.position }}</p>
            </SwiperSlide>
          </Swiper>
        </client-only>
      </section>
      <section class="about__features-section">
        <div v-for="feature in features" :key="feature.title" class="feature">
          <img :src="feature.icon" alt="icon" class="feature__icon" />
          <h4 class="feature__title">{{ feature.title }}</h4>
          <p class="feature__description">{{ feature.description }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import { PAGE } from "~/config/page-url";
import { services, teamMembers, features } from "~/resources/about";

const swiperConfig = reactive({
  initialSlide: 0,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Pagination, Autoplay],
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
.about {
  padding-top: 80px;
  &__breadcrumb {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    margin-bottom: 42px;
    display: flex;
    align-items: center;

    span {
      opacity: 0.5;
      color: #000000;

      &:first-child {
        cursor: pointer;
      }

      &:nth-child(2) {
        padding: 0 12px;
      }

      &.about__breadcrumb--current-tab {
        opacity: 1;
      }
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 705px;
    column-gap: 75px;
    margin-left: calc((100% - #{$container-width}) / 2);
    margin-bottom: 140px;

    .our-story {
      &__title {
        font-size: 54px;
        line-height: 64px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 40px;
      }

      &__desc {
        > p {
          font-size: 16px;
          line-height: 26px;
          font-weight: 400;

          &:not(&:last-child) {
            margin-bottom: 24px;
          }
        }
      }
    }

    > img {
      width: 100%;
    }
  }

  &__services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    margin-bottom: 140px;

    .service {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 230px;
      border-radius: 4px;
      transition: all 0.3s ease;

      > img {
        width: 80px;
        margin-bottom: 24px;
      }

      &__amount {
        font-size: 32px;
        line-height: 30px;
        font-weight: 700;
        color: #000000;
        margin-bottom: 12px;
      }

      &__desc {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #000000;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #000000;
        opacity: 0.3;
        border-radius: 4px;
      }

      &:hover {
        background: #db4444;

        > img {
          filter: invert(1);
        }

        .service__amount,
        .service__desc {
          color: #ffffff;
        }

        &::before {
          border: none;
          opacity: 1;
        }
      }
    }
  }

  &__team-members {
    display: flex;
    justify-content: space-between;
    margin-bottom: 140px;

    .team-members-swiper {
      padding-bottom: 46px;

      :deep(.swiper-pagination) {
        display: flex;
        align-items: center;
        justify-content: center;

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #000000;
          opacity: 0.3;
        }

        .swiper-pagination-bullet-active {
          position: relative;
          width: 16px;
          height: 16px;
          background: transparent;
          opacity: 1;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #000000;
            opacity: 0.3;
          }

          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: #db4444;
            border-radius: 50%;
          }
        }
      }
    }

    .team-member {
      text-align: left;

      &__image {
        width: 100%;
        margin-bottom: 32px;
      }

      &__name {
        font-size: 32px;
        line-height: 30px;
        font-weight: 500;
        margin-bottom: 8px;
        color: #000000;
      }

      &__position {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #000000;
        margin-bottom: 16px;
      }

      &__social {
        a {
          margin: 0 5px;
          color: #333;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  &__features-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 88px;
    margin-bottom: 140px;

    .feature {
      text-align: center;
      flex-basis: 30%;

      &__icon {
        width: 80px;
        margin-bottom: 24px;
      }

      &__title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 8px;
      }

      &__description {
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
</style>
