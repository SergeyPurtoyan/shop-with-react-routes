import React from 'react'

const Product = ({item,addToCart}) => {
  return (
    <div className='Product bg-slate-50 shadow-xl m-1 p-1 text-center hover:shadow-slate-700 rounded-lg '>
       <img className='  w-full h-96  rounded-lg' src={item.image} alt={item.title}  />
      <h2>{item.title.length > 30 ? item.title.slice(0, 30)+ '...' : item.title } </h2>
      <p className='price'>Price: {item.price}</p>
      <p >{item.description.length > 30 ?  item.description.slice(0,30) : item.description}</p>
      <button onClick={()=>addToCart(item)} className=' bg-teal-700 rounded-lg p-1 text-slate-200'>ADD TO CART</button>
    </div>
  )
}

export default Product