<template>
  <div class="home">
    <MainCategory />
    <SaleToday />
    <Category />
    <BestSelling />
    <CategoryBanner />
    <ExploreProduct />
    <NewArrival />
    <Service />
  </div>
</template>

<script setup lang="ts">
import MainCategory from "~/components/home/main-category.vue";
import SaleToday from "~/components/home/sale-today.vue";
import Category from "~/components/home/category.vue";
import BestSelling from "~/components/home/best-selling.vue";
import CategoryBanner from "~/components/home/category-banner.vue";
import ExploreProduct from "~/components/home/explore-product.vue";
import NewArrival from "~/components/home/new-arrival.vue";
import Service from "~/components/home/service.vue";
</script>
