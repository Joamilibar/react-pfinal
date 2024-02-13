import axios from "axios";
import { items } from "../json/datos";


/**
 * @description Local JSON
 * @param {number} limit
 * @returns {Promise}
 */

export async function getProducts(limit) {

    return (items);
}

export async function getProductById(id) {

    return items.find( item => item.id === Number(id) ); 
}

export async function getProductByCategory(Category) {
    
    return items.filter(item => item.categoria === Category);
}
