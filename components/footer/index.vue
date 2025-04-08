<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer-exclusive">
          <div class="footer-exclusive__title">Exclusive</div>
          <div class="footer-exclusive__sub">Subscribe</div>
          <div class="footer-exclusive__name">Get 10% off your first order</div>
          <div class="footer-exclusive__email">
            <input type="email" name="email" placeholder="Enter your email" />
            <img src="/assets/images/common/icon-send.png" alt="icon send" />
          </div>
        </div>
        <div class="footer-support">
          <div class="footer-support__title">Support</div>
          <div class="footer-support__name">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div class="footer-support__name">exclusive@gmail.com</div>
          <div class="footer-support__name">+88015-88888-9999</div>
        </div>
        <div class="footer-account">
          <div class="footer-about__title">Account</div>
          <div class="footer-about__name">My Account</div>
          <div class="footer-about__name">Login / Register</div>
          <div class="footer-about__name">Cart</div>
          <div class="footer-about__name">Wishlist</div>
          <div class="footer-about__name">Shop</div>
        </div>
        <div class="footer-about">
          <div class="footer-about__title">Quick Link</div>
          <div class="footer-about__name">Privacy Policy</div>
          <div class="footer-about__name">Terms Of Use</div>
          <div class="footer-about__name">FAQ</div>
          <div class="footer-about__name">Contact</div>
        </div>
        <div class="footer-donwload">
          <div class="footer-donwload__title">Download App</div>
          <div class="footer-donwload__name">
            Save $3 with App New User Only
          </div>
          <div class="footer-donwload__qr">
            <img src="/assets/images/footer/download.png" alt="qr" />
          </div>
          <div class="footer-donwload__social">
            <img src="/assets/images/footer/social.png" alt="social" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer__line" />
    <div class="footer__copyright">
      <img src="/assets/images/footer/icon-copyright.png" alt="icon" />
      <span>Copyright Rimel 2022. All right reserved</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: #000000;

  &__wrapper {
    display: grid;
    grid-template-columns: 217px 175px 123px 109px 1fr;
    column-gap: 87px;
    margin-bottom: 60px;
    padding-top: 80px;

    .footer-exclusive {
      color: #fafafa;
      &__title {
        font-size: 24px;
        line-height: 24px;
        font-weight: 700;
        margin-bottom: 16px;
      }

      &__sub {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 24px;
      }

      &__name {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        margin-bottom: 16px;
      }

      &__email {
        position: relative;
        height: 48px;

        input {
          width: 100%;
          height: 100%;
          border: 1.5px solid #fafafa;
          border-radius: 5px;
          padding: 12px 0px 12px 16px;
          background: transparent;
        }

        > img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 15px;
        }
      }
    }

    .footer-support,
    .footer-account,
    .footer-about {
      color: #fafafa;
      &__title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 24px;
      }

      &__name {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        &:not(&:last-child) {
          margin-bottom: 16px;
        }
      }
    }

    .footer-donwload {
      &__title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 24px;
        color: #fafafa;
      }

      &__name {
        font-size: 12px;
        line-height: 28px;
        font-weight: 500;
        color: #fafafa;
        opacity: 70%;
      }

      &__qr {
        margin: 8px auto 24px;
      }
    }
  }

  &__line {
    width: 100%;
    height: 1px;
    background: #fafafa;
    opacity: 0.5;
    margin-bottom: 16px;
  }

  &__copyright {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    padding-bottom: 24px;
    opacity: 0.5;

    > img {
      margin-right: 6px;
    }
  }
}
</style>
