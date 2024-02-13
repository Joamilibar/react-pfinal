import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { formatoNumero } from '../hooks/useProducts';




const ItemListContainer = ({ productsData }) => {
  
  return (

    <div className='tienda_prod'>
      {productsData.map((products) => {
        return (
          <Card key={products.id} style={{ width: '15rem' }}>
            <Link key={products.id} to={`/item/${products.id}`}><Card.Img variant="top" src={products.imagen} /></Link>
            <Card.Body>
              <Card.Title>{products.item}</Card.Title>              
              <div>{formatoNumero(products.precio)}</div>
              <div className='boton_contacto'>
                <Link key={products.id} to={`/item/${products.id}`}><Button variant="primary">Comprar</Button> </Link>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>



  )
}

export default ItemListContainer;