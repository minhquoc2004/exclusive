<template>
  <section class="new-arrival">
    <div class="container new-arrival__wrapper">
      <div class="new-arrival__wrapper--left">
        <img
          src="/assets/images/home/new-arrival/play-station.png"
          alt="play-station"
        />
      </div>
      <div class="new-arrival__wrapper--right">
        <div class="new-arrival__wrapper--right__top">
          <img
            src="/assets/images/home/new-arrival/women-collection.png"
            alt="women-collection"
          />
        </div>
        <div class="new-arrival__wrapper--right__bottom">
          <img
            src="/assets/images/home/new-arrival/speaker.png"
            alt="speaker"
          />
          <img
            src="/assets/images/home/new-arrival/perfume.png"
            alt="perfume"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.new-arrival {
  margin-bottom: 140px;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    height: 600px;

    &--left {
      > img {
        width: 100%;
        cursor: pointer;
      }
    }

    &--right {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      row-gap: 30px;

      &__top {
        > img {
          width: 100%;
          cursor: pointer;
        }
      }

      &__bottom {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 30px;

        > img {
          width: 100%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
