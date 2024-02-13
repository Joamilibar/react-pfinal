import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, getFirestore, where, query } from "firebase/firestore";
import { getProductByCategory } from "../services";


export const useGetProducts = (collectionName = 'products') => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, collectionName);

        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            )

        })
    }, [])

    return { productsData, loading, error }

}

export const useGetProductById = (collectionName = 'products', id) => {
    const [productData, setProductData] = useState([null]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const docRef = doc(db, collectionName, id)

        getDoc(docRef).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() })
        })

    }, [id]);

    return { productData, loading, error }
}

export const useGetCategories = (collectionName = 'categories') => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, collectionName);

        getDocs(productsCollection).then((snapshot) => {
            const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setCategories(categories[0].categories)
        });

    }, []);

    return { categories, loading, error }
}

export const useGetProductByCategory = (category) => {
    const [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("categoria", "==", `${category}`));
        getDocs(q).then((snapshot) => {
            setProductsByCategory(
                snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            );
        });
    }, [category]);

    return { productsByCategory };
}

export const formatoNumero = (number) =>
    new Intl.NumberFormat("ch-CL").format(number)

