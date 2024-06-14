import { create } from "zustand";

function removeItemOnce(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export const useCartStore = create((set) => {
    return {
        cart: [],
        addToCart: (item) => set((state) => ({cart: [...state.cart, item]})),
        removeFromCart: (item) => set((state) => ({cart: removeItemOnce([...state.cart], item)}))
    }
})