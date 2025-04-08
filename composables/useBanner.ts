export function useBanner() {
  const { $axios } = useNuxtApp()

  interface IBanner {
    id: number
    title: string
    image: string
  }

  const banner = reactive<IBanner[]>([])

  const getBanner = async () => {
    try {
      const { data } = await $axios.get('/resources/banner.json')
      if (data.status === 'success') {
        Object.assign(banner, data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    banner,
    getBanner
  }
}