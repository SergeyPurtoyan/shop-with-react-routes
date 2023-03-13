import React from 'react'
import Product from './Product'


const Products = ({products,addToCart}) => {

   
  return (
    <div className='Products'>
      {
        products.map(el=> <Product key={el.id} item={el} addToCart={addToCart}/>)
      } 
    </div>
  )
}

export default Products