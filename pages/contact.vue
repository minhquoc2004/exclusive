<template>
  <div class="contact-page">
    <div class="contact-page__wrrapper container">
      <nav class="contact-page__breadcrumb">
        <span @click="navigateTo(PAGE.HOME)">Home</span> <span>/</span> <span>Contact</span>
      </nav>
      <div>
  </div>
      <div class="contact-page__content">
        <div class="info">
          <div class="info__method">
            <h3 class="info__method-title">
              <img
                src="/assets/images/contact/icon-phone.png"
                alt="icon-phone"
              />
              <span>Call To Us</span>
            </h3>
            <p class="info__method-text">
              We are available 24/7, 7 days a week.
            </p>
            <p class="info__method-text">Phone: +880161111222</p>
          </div>
          <div class="line" />
          <div class="info__method">
            <h3 class="info__method-title">
              <img src="/assets/images/contact/icon-mail.png" alt="icon-mail" />
              <span>Write To US</span>
            </h3>
            <p class="info__method-text">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p class="info__method-text">Emails: customer@exclusive.com</p>
            <p class="info__method-text">Emails: support@exclusive.com</p>
          </div>
        </div>
        <form @submit.prevent="submitForm" class="form">
          <div class="form__row">
            <input v-model="form.name" type="text" placeholder="Your Name *" />
            <input
              v-model="form.email"
              type="email"
              placeholder="Your Email *"
            />
            <input
              v-model="form.phone"
              type="tel"
              maxlength="10"
              placeholder="Your Phone *"
            />
          </div>
          <textarea
            v-model="form.message"
            placeholder="Your Message"
          ></textarea>
          <div class="form__submit-btn">
            <BaseButton 
              class="base-button--primary" 
              :width="215" 
              :height="56" 
              type="submit"
              @click="submitForm"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </BaseButton>
          </div>
          <p v-if="submitError" class="form__error-message">
            {{ submitError }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/common/base-button.vue";
import { PAGE } from "~/config/page-url";
import useContactForm from "~/composables/useContact";

const { form, isSubmitting, submitError, submitForm } = useContactForm();
</script>

<style lang="scss" scoped>
.contact-page {
  &__wrrapper {
    padding: 80px 0 140px;
  }

  &__breadcrumb {
    margin-bottom: 80px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000000;

    > span {
      opacity: 0.5;

      &:first-child {
        cursor: pointer;
      }

      &:nth-child(2) {
        padding: 0 12px;
      }

      &:last-child {
        opacity: 1;
      }
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 30px;

    .info {
      padding: 40px 35px;
      box-shadow: 0px 1px 13px 0px #0000000d;
      background: #ffffff;

      &__method {
        position: relative;

        &-title {
          display: flex;
          align-items: center;
          column-gap: 16px;
          margin-bottom: 24px;

          > img {
            width: 40px;
          }

          > span {
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
          }
        }

        &-text {
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
          margin-bottom: 16px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .line {
        width: 100%;
        height: 1px;
        margin: 32px 0;
        background-color: #000000;
        opacity: 0.5;
      }
    }

    .form {
      padding: 40px 32px;
      background: #ffffff;
      box-shadow: 0px 1px 13px 0px #0000000d;

      &__row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-bottom: 32px;
      }

      input,
      textarea {
        width: 100%;
        padding: 10px;
        border: none;
        background: #f5f5f5;
        border-radius: 4px;

        &:focus-visible {
          outline: none;
        }
      }

      textarea {
        height: 207px;
        resize: unset;
      }

      &__submit-btn {
        display: flex;
        justify-content: flex-end;
        margin-top: 32px;
      }

      &__error-message {
        color: #db4444;
        margin-top: 10px;
      }
    }
  }
}
</style>
