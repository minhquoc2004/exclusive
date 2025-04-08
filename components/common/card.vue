<template>
  <div class="card-item">
    <div v-if="isShowAction" class="card-item__action">
      <div class="heart" :class="{'is-heart': wishList.includes(card.id)}" @click="handleAddWishList(card.id)">
        <img
          src="/assets/images/common/wishlist.png"
          alt="wishlist-icon"
          class="wishlist-icon"
        />
      </div>
      <div class="own" :class="{'is-own': ownList.includes(card.id)}" @click="handleAddOwnProductList(card.id)">
        <img
          src="/assets/images/common/eyes.png"
          alt="eyes-icon"
          class="eyes-icon"
        />
      </div>
    </div>
    <div v-if="isShowDeletedIcon"  class="card-item__delete-action">
      <div class="deleted" @click="emit('deleted-product', card.id)">
        <img
          src="/assets/images/common/delete-icon.png"
          alt="delete-icon"
          class="delete-icon"
        />
      </div>
    </div>
    <div class="card-item__image">
      <img :src="card.image" :alt="`${card.title}`" />
      <div v-if="card.discount" class="discount">-{{ card.discount }}%</div>
      <div class="inner"><p>Add To Cart</p></div>
    </div>
    <div class="card-item__title">{{ card.title }}</div>
    <div class="card-item__price">
      <span class="card-item__price--new">${{ card.newPrice }}</span>
      <span v-if="card.oldPrice" class="card-item__price--old">
        ${{ card.oldPrice }}
      </span>
    </div>
    <div class="card-item__review">
      <div class="card-item__review--star">
        <StarRating :rating="card.rating" />
      </div>
      <div class="card-item__review--number">({{ card.numberOfReview }})</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
import StarRating from "./star-rating.vue";
import type { IProduct } from "~/types/product";

const emit = defineEmits(['deleted-product'])

const store = useAppStore()
const { wishList, ownList } = storeToRefs(store)

const props = withDefaults(defineProps<{
  card: IProduct;
  isShowAction?: boolean
  isShowDeletedIcon?: boolean
}>(), {
  isShowAction: true,
  isShowDeletedIcon: false
});

const handleAddWishList = (cardId: number) => {
  if (wishList.value.includes(cardId)) {
    store.removeProductFromWishList(cardId)
  } else{
    store.addProductToWishList(cardId)
  }
}

const handleAddOwnProductList = (cardId: number) => {
  if (ownList.value.includes(cardId)) {
    store.removeProductFromOwnList(cardId)
  } else{
    store.addProductToOwnProductList(cardId)
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  cursor: pointer;
  position: relative;

  &__action, &__delete-action {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1;

    .heart, .own, .deleted {
      width: 34px;
      height: 34px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      &:hover,  &.is-heart, &.is-own {
        background-color: #DB4444;

        > img {
          filter: invert(1);
        }
      }

      > img {
        width: 24px;
        height: 24px;
      }
    }

    .own {
      margin-top: 8px;
    }
    
  }

  &__image {
    position: relative;
    > img {
      width: 100%;
      margin-bottom: 16px;
    }

    .discount {
      position: absolute;
      top: 12px;
      left: 12px;
      padding: 4px 12px;
      background-color: #db4444;
      color: #ffffff;
      border-radius: 4px;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
    }

    .inner {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 41px;
      width: 100%;
      background-color: #000000;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: hidden;

      > p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
      }
    }
  }

  &__title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 8px;
  }

  &__price {
    display: flex;
    column-gap: 16px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 8px;

    &--new {
      color: #db4444;
    }

    &--old {
      color: #000000;
      opacity: 0.5;
      text-decoration: line-through;
    }
  }

  &__review {
    display: flex;
    align-items: center;
    column-gap: 8px;

    &--number {
      font-size: 14px;
      line-height: 21px;
      font-weight: 600;
      color: #000000;
      opacity: 0.5;
    }
  }

  &:hover {
    .card-item__image {
      .inner {
        visibility: visible;
      }
    }
  }
}
</style>
