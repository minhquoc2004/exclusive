<template>
  <div class="favorite-products">
    <div class="container favorite-products__wrapper">
      <section class="wish-list">
        <div class="wish-list__top">
          <div class="wish-list__top--title">Wishlist ({{wishListProduct.length}})</div>
          <BaseButton
            :width="223" 
            :height="56"
            class="base-button--secondary"
          >
            Move All To Bag
          </BaseButton>
        </div>
        <div class="wish-list__list">
          <client-only>
            <Swiper v-bind="swiperConfig" class="product-swiper">
              <SwiperSlide v-for="product in wishListProduct" :key="product.id">
                <Card :card="product" :is-show-action="false" is-show-deleted-icon @deleted-product="handleDeleteProductOfWishList" />
              </SwiperSlide>
            </Swiper>
          </client-only>
        </div>
      </section>
      <section class="for-you">
        <div class="for-you__top">
          <BaseTitle title="Just For You" />
          <BaseButton
            :width="223" 
            :height="56"
            class="base-button--secondary"
          >
            See All
          </BaseButton>
        </div>
        <div class="for-you__list">
          <client-only>
            <Swiper v-bind="swiperConfig" class="product-swiper">
              <SwiperSlide v-for="product in ownListProduct" :key="product.id">
                <Card :card="product" :is-show-action="false" is-show-deleted-icon @deleted-product="handleDeleteProductOfOwnList"/>
              </SwiperSlide>
            </Swiper>
          </client-only>
        </div>
      </section>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useAppStore } from "~/stores/app"
import BaseTitle from "~/components/common/base-title.vue";
import BaseButton from "~/components/common/base-button.vue";
import Card from "~/components/common/card.vue";
import type { IProduct } from "~/types/product"
import { useProduct } from "~/composables/useProduct";


const store = useAppStore()
const { wishList, ownList } = storeToRefs(store)
const { products, getProducts } = useProduct();

const wishListProduct = ref<IProduct[]>([])
const ownListProduct = ref<IProduct[]>([])

const swiperConfig = reactive({
  initialSlide: 0,
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
});

onMounted(async () => {
  await fetchWishList()
  await fetchOwnList()
})

const fetchWishList = async () => {
  await getProducts('', true, false)
  wishListProduct.value = [...products.value]
}

const fetchOwnList = async () => {
  await getProducts('', false, true)
  ownListProduct.value = [...products.value]
}

const handleDeleteProductOfWishList = async (productId: number) => {
  store.removeProductFromWishList(productId)
  await fetchWishList()
}

const handleDeleteProductOfOwnList = async (productId: number) => {
  store.removeProductFromOwnList(productId)
  await fetchOwnList()
}

</script>

<style lang="scss" scoped>
.favorite-products {
  &__wrapper {
    padding-top: 80px;
    padding-bottom: 140px;
  }
  .wish-list {
    padding-bottom: 80px;

    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 60px;

      &--title {
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
      }
    }
  }

  .for-you {
    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 60px;
    }
  }
}
</style>