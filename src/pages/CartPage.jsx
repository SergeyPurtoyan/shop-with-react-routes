import React from 'react'
import CartList from '../components/CartList';


const CartPage = ({orders,removeFromCart,incQuantity,decQuantity}) => {
  const total = orders.reduce((sum, el)=> sum + el.price* el.quantity, 0);

  return (
    <div className='CartPage'>
     {
        orders.map(el=> <CartList
                            key={el.id}
                            item={el} 
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                            remoweFromCart={removeFromCart}
                        />)
      }
    <p className=' text-2xl text-teal-700 font-bold ml-8 '>TOTAL :{total.toFixed(2)}</p>
    </div>
  )
}

export default CartPage