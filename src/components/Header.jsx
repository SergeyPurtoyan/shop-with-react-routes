import {NavLink as Link} from 'react-router-dom'

const Header = ({count}) => {
  
  return (
    
      <nav className=' bg-slate-400 p-5 flex justify-center mb-12'>
      <Link to='/' className=' link text-white text-4xl m-5 font-bold'>HOME</Link>
      <Link to='/about' className=' link text-white text-4xl m-5 font-bold'>ABOUT</Link>
      <Link to='/contact' className=' link text-white text-4xl m-5 font-bold'>CONTACTS</Link>
      <Link to='/cart' className=' link text-white text-4xl  ml-56 font-bold'> <div><p className=' text-white text-xl hover:text-white' >{count}</p></div><i class="fa-solid fa-cart-shopping " ></i></Link>
      </nav>
    
  )
}

export default Header