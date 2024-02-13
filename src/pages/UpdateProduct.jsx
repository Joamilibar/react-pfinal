import { useParams } from "react-router-dom"
import { useGetProductById } from "../hooks/useProducts"
import { useState, useEffect } from "react"
import { doc, getFirestore, updateDoc } from "firebase/firestore"


export const UpdateProduct = () => {
    const { id } = useParams()

    const { productData } = useGetProductById("products", id)

    const [item, setItem] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [stock, setStock] = useState(0);
    const [precio, setPrecio] = useState(0);
    const categories = useGetCategories();

    useEffect(() => {
        setItem("");
        setDescripcion("");
        setImagen("");
        setCategoria("");
        setStock(0);
        setPrecio(0);

    }, [productData])

    const handleUpdateProduct = () => {
        const data = {
            item,
            descripcion,
            imagen,
            categoria,
            stock,
            precio,
        }

        const db = getFirestore();
        const productsCollection = doc(db, "products", id)
        updateDoc(productsCollection, data).then(() => {
            alert("Producto Actualizado");
        });
    }
    return (
        <div>
            <h1>Crear Nuevo Producto</h1>
            <input type="text" placeholder='item' value={item} onChange={(e) => setItem(e.target.value)} />
            <input type="text" placeholder='Desccripción' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            <input type="text" placeholder='Imagen' value={imagen} onChange={(e) => setImagen(e.target.value)} />
            <select
                onChange={(e) => setCategoria(e.target.value)}
            >
                {categories.map((categoria, index) => (
                    <option key={index} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>

            <input type="text" placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)} />
            <input type="text" placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
            <button onClick={handleCreateProduct}>Crear Producto</button>
        </div>
    )
}