import React from 'react'
import Logo from '/home/user/OrganicStore/src/assets/organic-store-logo5.svg'
import cart from '/home/user/OrganicStore/src/assets/cart.svg'
import login from'/home/user/OrganicStore/src/assets/login.png'
import { Link} from 'react-router-dom'
import  '../Component.css/Header.css'

function Header() {
  return (
    <nav>
      <div className="navitem">
        <div id='first'>
          <Link className='link'to="/"><img src={Logo} alt="home"/></Link>
          <Link className='link' to="/Everything">EVERYTHING</Link>
          <Link className='link' to="/Groceries">GROCERIES</Link>
          <Link className='link' to="/Juice">JUICE</Link>
          </div>

          <div id='last'>
          <Link className='link' to="/About">ABOUT</Link>
          <Link className='link' to="/Contact">CONTACT</Link>
          <Link className='link' to="/Price">PRICE</Link>
          <Link className='lin' to="/AddCart"><img src={cart} alt='additem'></img></Link>
          <Link className='lin' to="/logIn"><img src={login} alt='login'></img></Link>
          

          </div>
      </div>
    </nav>
   
  );
}

export default Header