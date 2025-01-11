import {create} from "zustand";

export const useProductStore = create((set)=> ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct?.name || !newProduct?.price || !newProduct?.image){
            return {success: false, message: "Please fill all fields"}
        }
        const response = await fetch("/api/products", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct),
        });
        const data = await response.json();
        set((state)=> ({products: [...state.products, data.data]}));
        return {success: true, message: "Product Created Successfully"}
    },
    fetchProducts: async()=>{
        const response = await fetch("/api/products");
        const data = await response.json();
        set({products: data?.data});
    },
    deleteProduct: async (id) => {
        const response = await fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        if(!data.success){
            return {success: false, message: data?.message}
        } 
        set((state)=> ({products: state?.products?.filter((e)=> e?._id !== id)}));
        return {success: true, message: data?.message}
    },
    updateProduct: async(id, updatedProduct) => {
        const response = await fetch(`/api/products/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await response.json();
        if(!data.success){
            return {success: false, message: data?.message}
        } 
        set((state)=>({product: state?.products?.map((e)=> e?._id === id ? data?.data : e
        )}));
        return {success: true, message: data?.message}
    }
}));