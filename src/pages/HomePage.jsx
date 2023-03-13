

import Products from "../components/Products";






const HomePage = ({products,addToCart}) => {

 


  return (
    <div className="HomePage">
      <Products products={products} addToCart={addToCart}/>
    </div>
  )
}

export default HomePage