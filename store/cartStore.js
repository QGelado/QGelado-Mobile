import { create } from "zustand";

export const useCartStore = create((set) => {
    return {
        cart: [],
        addToCart: (item) => set((state) => ({cart: [...state.cart, item]})),
        removeFromCart: (item) => set((state) => ({cart: state.cart.filter((sorvete) => sorvete?._id !== item?._id)}))
    }
})