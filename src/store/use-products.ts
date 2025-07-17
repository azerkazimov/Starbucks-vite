import { create } from "zustand";
import type { Menu } from "@/types/menu";

interface ProductsState {
  products: Menu[];
  addProduct: (coffee: Menu) => void;
  removeProduct: (id: number) => void;
  cleanProducts: () => void;
  getTotalCount: () => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  
}

export const useProducts = create<ProductsState>((set, get) => ({
  products: [],
  addProduct: (coffee: Menu) => set((state) => {
    const existingProduct = state.products.find(product => product.id === coffee.id);
    
    if (existingProduct) {
      // If product exists, increase its quantity
      return {
        products: state.products.map(product => 
          product.id === coffee.id 
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      };
    } else {
      // If product doesn't exist, add it with quantity 1
      return {
        products: [...state.products, { ...coffee, quantity: coffee.quantity || 1 }]
      };
    }
  }),
  removeProduct: (id: number) => set((state) => ({ 
    products: state.products.filter((product) => product.id !== id) 
  })),
  cleanProducts: () => set({ products: [] }),
  getTotalCount: () => get().products.length,
  increaseQuantity: (id: number) => set((state) => ({
    products: state.products.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product)
  })),
  decreaseQuantity: (id: number) => set((state) => ({
    products: state.products.map((product) => product.id === id ? { ...product, quantity: product.quantity - 1 } : product)
  })),
  
}));