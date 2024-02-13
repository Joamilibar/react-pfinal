import { useParams } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer";
import { useGetProductByCategory } from "../hooks/useProducts";


export const Category = () => {

    const { category } = useParams();
    const { productsByCategory } = useGetProductByCategory(category)

    return (
        <ItemListContainer productsData={productsByCategory}/>
    )
}