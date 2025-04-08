import { defineStore } from 'pinia'
import type { IUser } from '~/types/user'

interface IState {
  user: IUser | null
  wishList: number[]
  ownList: number[]
}

export const useAppStore = defineStore('app', {
  state: (): IState => ({
    user: null,
    wishList: [],
    ownList: []
  }),
  getters: {
    isLoggedIn: (state) => !!state.user
  },
  actions: {
    setUser(user: IUser) {
      this.user = user
    },
    addProductToWishList(cardId: number) {
      this.wishList.push(cardId)
    },
    removeProductFromWishList(cardId: number) {
      const newWishList = this.wishList.filter((id) => id !== cardId)
      this.wishList = newWishList
    },
    addProductToOwnProductList(cardId: number) {
      this.ownList.push(cardId)
    },
    removeProductFromOwnList(cardId: number) {
      const newWishList = this.ownList.filter((id) => id !== cardId)
      this.ownList = newWishList
    }
  },
  persist: true
})