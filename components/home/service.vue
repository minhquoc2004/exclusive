<template>
  <section class="service">
    <div class="container service__wrapper">
      <div class="service__item">
        <img src="/assets/images/home/service/delivery.png" alt="delivery" />
        <div class="service__item--title">FREE AND FAST DELIVERY</div>
        <div class="service__item--desc">
          Free delivery for all orders over $140
        </div>
      </div>
      <div class="service__item">
        <img src="/assets/images/home/service/contact.png" alt="delivery" />
        <div class="service__item--title">24/7 CUSTOMER SERVICE</div>
        <div class="service__item--desc">Friendly 24/7 customer support</div>
      </div>
      <div class="service__item">
        <img src="/assets/images/home/service/guarantee.png" alt="delivery" />
        <div class="service__item--title">MONEY BACK GUARANTEE</div>
        <div class="service__item--desc">We reurn money within 30 days</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.service {
  margin-bottom: 140px;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 88px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > img {
      align-self: center;
      width: 80px;
      height: 80px;
      margin-bottom: 24px;
    }

    &--title {
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
      color: #000000;
    }

    &--desc {
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      color: #000000;
      text-align: center;
    }
  }
}
</style>
