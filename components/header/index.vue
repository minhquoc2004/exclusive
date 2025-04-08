<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__wrapper--left">
          <nuxt-link :to="PAGE.HOME">
            <img src="/assets/images/common/logo.png" alt="logo" />
          </nuxt-link>
          <div class="nav-menu">
            <nuxt-link
              v-for="item in NavMenu"
              :key="item.link"
              :to="item.link"
              class="nav-menu__title"
              :class="{ active: $route.path === item.link }"
              >{{ item.title }}</nuxt-link
            >
          </div>
        </div>
        <div class="header__wrapper--right">
          <div class="searching">
            <input type="text" placeholder="What are you looking for?" />
            <img
              src="/assets/images/common/search-icon.png"
              alt="search"
              class="search-icon"
            />
          </div>
          <div class="wish-list" @click="navigateTo(PAGE.WISH_LIST)">
            <span v-if="wishList.length" class="wish-list__quantity">{{ wishList.length }}</span>
            <img
              src="/assets/images/common/wishlist.png"
              alt="wishlist"
              class="wishlist-icon"
            />
          </div>
          <div class="cart">
            <img
            src="/assets/images/common/cart.png"
            alt="cart"
            class="cart-icon"
          />
          </div>
          <img
            v-if="isLoggedIn"
            src="/assets/images/common/user.png"
            alt="avatar"
            class="avatar-icon"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
import { PAGE } from "~/config/page-url";
import { NavMenu } from "~/resources/home";

const store = useAppStore()
const { isLoggedIn, wishList } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.header {
  height: 94px;
  padding-top: 39px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.5px;
    background: #000000;
    opacity: 30%;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--left {
      display: flex;
      align-items: center;
      column-gap: 160px;

      > img {
        width: 118px;
        cursor: pointer;
      }

      .nav-menu {
        display: flex;
        align-items: center;
        column-gap: 48px;

        &__title {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          cursor: pointer;
          color: #000000;
          transition: border-bottom 2s linear;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 0.5px;
            background: #000000;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s linear;
          }

          &:hover,
          &.active {
            &::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        }
      }
    }

    &--right {
      display: flex;
      align-items: center;

      .searching {
        position: relative;
        margin-right: 24px;

        input {
          width: 243px;
          height: 38px;
          padding: 7px 12px 7px 20px;
          border-radius: 4px;
          font-family: "Poppins", sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
          background: #f5f5f5;
          border: none;

          &:focus-visible {
            outline: none;
          }
        }

        .search-icon {
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);
        }
      }

      .wish-list {
        cursor: pointer;
        position: relative;

        > img {
          margin-right: 16px;
        }

        &__quantity {
          position: absolute;
          top: 0;
          right: 16px;
          width: 16px;
          height: 16px;
          background: #db4444;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
          color: #FAFAFA;
        }
      }

      .cart {
        > img {
        cursor: pointer;
        }
      }

      .avatar-icon {
        cursor: pointer;
        margin-left: 16px;
      }
    }
  }
}
</style>
