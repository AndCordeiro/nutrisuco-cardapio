import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  increase: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),
  decrease: (id) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(i.quantity - 1, 0) } : i
        )
        .filter((i) => i.quantity > 0),
    })),
  clear: () => set({ items: [] }),
}));
