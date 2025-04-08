import { useAppStore } from "~/stores/app"
import type { IProduct } from "~/types/product"

export function useProduct() {
  const { $axios } = useNuxtApp()
  const store = useAppStore()
  const { wishList, ownList } = storeToRefs(store)

  const products = ref<IProduct[]>([])

  const getProducts = async (category: string, isWishList?: boolean, isForYou?: boolean) => {
    try {
      const { data } = await $axios.get('/resources/product.json')
      if (data.status === 'success') {
        if (!category) {
          products.value = data.data
        } else {
          const productsFilter = data.data.filter((product: IProduct) => product.category === category) || []
          products.value = productsFilter
        }

        if (isWishList) {
          const list = products.value.filter((product) => wishList.value.includes(product.id))
          products.value = list
        }

        if (isForYou) {
          const list = products.value.filter((product) => ownList.value.includes(product.id))
          products.value = list
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    products,
    getProducts
  }
}
