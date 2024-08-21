import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {

    //Le state va définir les données de l'application afin de les réutiliser dans les autres composants
    state(){
        return{
            carts: []
        }
    },
    getters: {
        totalItems: (state) => state.carts.reduce((total, cart) => total + cart.quantity, 0),
        totalPrice: (state) => state.carts.reduce((total, cart) => total + (cart.price * cart.quantity), 0)
    },
    actions: {
        addCart(product, quantity = 1) {
          const existingCart = this.carts.find(cart => cart.id === product.id)
          if (existingCart) {
            existingCart.quantity += quantity
          } else {
            this.carts.push({ ...product, quantity })
          }
        },
        removeCart(productId) {
          const index = this.carts.findIndex(cart => cart.id === productId)
          if (index !== -1) {
            this.carts.splice(index, 1)
          }
        },
        updateQuantity(productId, quantity) {
          const cart = this.carts.find(cart => cart.id === productId)
          if (cart) {
            cart.quantity = quantity
          }
        },
        clearCart() {
          this.carts = []
        }
      },
    
})