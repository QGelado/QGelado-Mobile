import { create } from "zustand";

export const useUserStore = create((set) => {
    return {
        user: {},
        signIn: (item) => set((state) => ({user: {...state.user, item} })),
        signOut: (item) => set((state) => ({user: state.user.filter((u) => u?._id !== item?._id)}))
    }
})