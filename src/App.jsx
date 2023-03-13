import {Routes,Route} from 'react-router-dom'
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import ContactPage from './pages/ContactPage'
import Header from "./components/Header"
import Footer from "./components/Footer"
import CartPage from './pages/CartPage'
import { useState,useEffect } from 'react'




const App = () => {

  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  
useEffect(()=>{
 
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(arr =>{
    setProducts(arr)
  })

},[]);

  useEffect(()=>{
    let sum = 0;
    for(let elem of orders){
        sum += elem.quantity;
    }   
    setCount(sum);
    
}, [orders]);
  

const addToCart = (item)=>{
  const itemIndex = orders.findIndex(el => el.id === item.id);
  if(itemIndex === -1){
      const newItem = {
          ...item,
          quantity: 1
      };
      setOrders([...orders, newItem]);

  }else{
      
      const newOrders = orders.map((el, index)=>{

          if(index === itemIndex) el.quantity = el.quantity+1;

          return el;
      });
      setOrders(newOrders);
  }
}

const removeFromCart = (id)=>{
  const newOrders = orders.filter(el => el.id !== id);
  setOrders(newOrders);
}

const incQuantity = (id)=>{
  const newOrders = orders.map(el=>{

      if(el.id === id) el.quantity = el.quantity+1;
          
      return el;
  });
  setOrders(newOrders)
}

const decQuantity = (id)=>{
  const newOrders = orders.map(el=>{

      if(el.id === id) el.quantity = el.quantity>0 ? el.quantity-1 : 0;

      return el;
  });

  setOrders(newOrders);
}


  return (
    <div className='App'> 
    <Header count={count}/>
    <Routes >
      <Route path='/' element={<HomePage  products={products} addToCart={addToCart}/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>

      <Route path='/cart' element={<CartPage 
                                        removeFromCart={removeFromCart}
                                        incQuantity={incQuantity}
                                        decQuantity={decQuantity}
                                        orders={orders}/>}/>
      
    </Routes>
    <Footer/>
    
    </div>
  )
}

export default App