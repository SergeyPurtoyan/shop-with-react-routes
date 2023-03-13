import React from 'react'


const CartList = ({item, remoweFromCart, incQuantity, decQuantity}) => {

  
  const price =  item.price * item.quantity;
  const fixedPrice = price.toFixed(2);
  return (
    <div className='CartList border-2 border-teal-700 bg-gray-100'>
       <img src={item.image} />
       <div className='desc'>
       <span className='titel relative left-28 border-r-2 border-teal-700 p-1 w-72  flex justify-start'>{item.title.length > 30 ? item.title.slice(0, 30)+ '..' : item.title } </span>
      
       
       <div className='btn relative left-28'>
       <i class="fa-solid fa-caret-up" onClick={()=> incQuantity(item.id)}></i>
       <i class="fa-solid fa-caret-down" onClick={()=> decQuantity(item.id)}></i>
       
       </div>
       <span className=' relative left-28 font-bold text-xl mx-2 border-2 border-teal-700 p-1 rounded' > {item.quantity} </span>
       <span className=' relative left-20 p-1 w-32'>{fixedPrice}$</span>
       
     
     <i class=" relative left-16 font-bold text-xl mx-2 p-1 cursor-pointer fa-solid fa-x" onClick={()=> remoweFromCart(item.id)}></i>
    
       
       </div>
      
    </div>
  )
}

export default CartList