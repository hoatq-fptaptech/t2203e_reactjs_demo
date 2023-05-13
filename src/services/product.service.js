import api from "./api";

export const get = async ()=>{
    try {
        const url = "products?limit=20";
        const rs = await api.get(url);
        return rs.data.products;
    } catch (error) {
        return [];
    }
}

export const post = async (product)=>{
    // post product
}