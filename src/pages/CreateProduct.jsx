import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { useState } from 'react'
import { useGetCategories } from '../hooks/useProducts';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateProduct = () => {
    const [item, setItem] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [stock, setStock] = useState(0);
    const [precio, setPrecio] = useState(0);
    const { categories } = useGetCategories();

    const handleFieldReset = () => {
        setItem("");
        setDescripcion("");
        setImagen("");
        setCategoria("Categorias...");
        setStock(0);
        setPrecio(0);
    }

    const handleClick = () => {
        const notify = () => toast("Wow so easy!");
    };

    const handleCreateProduct = () => {

        if (
            item === "" ||
            descripcion === "" ||
            imagen === "" ||
            categoria === "" ||
            stock === "" ||
            precio === ""
        ) {
            handleClick()
            toast.warning("Todos los datos son obligatorios...");
        } else {
            const data = {
                item,
                descripcion,
                imagen,
                categoria,
                stock,
                precio,
            }
            const db = getFirestore();
            const productsCollection = collection(db, 'products');
            addDoc(productsCollection, data).then(({ id }) => { console.log(id) })
            handleFieldReset();
            handleClick()
            toast.success('Producto creado con éxito!');            
        }
    }

    return (
        <Form>
            <div className='cuerpo_tienda container'>
                <h1>Crear Nuevo Producto</h1>
                <div className='container'>
                    <Form>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Producto</Form.Label>
                            <Form.Control placeholder="Nombre del Producto" value={item} onChange={(e) => setItem(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type='text' placeholder='Enlace de la Imagen' value={imagen} onChange={(e) => setImagen(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Categorías</Form.Label>
                            <Form.Select defaultValue="Selecionar Categoría..." onChange={(e) => setCategoria(e.target.value)}>
                                <option>Categorias...</option>
                                {categories.map((categoria, index) => (
                                    <option key={index} value={categoria}>
                                        {categoria}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type='number' placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type='number' placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        </Form.Group>

                    </Form>
                </div>

                <div className='boton_contacto'>
                    <Button onClick={handleCreateProduct}>
                        Crear Producto
                    </Button>
                    <ToastContainer />
                </div>

            </div>
        </Form>
    )
}

export default CreateProduct