import React from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';



const CartWidget = () => {
  const { count } = useContext(CartContext);
  const totalQuantity = count.reduce((total, item) => total + item.quantity, 0)


  return (
    <Link to="/cart">
      <div arial-label="Shopping Cart">
        🛒
        <span style={{ fontSize: '10px' }}>
          {totalQuantity}
        </span>
      </div>
    </Link>
  )
  console.log(totalQuantity)
}

export default CartWidget;