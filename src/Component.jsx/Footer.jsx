import React from 'react'
import Logo from '../assets/organic-store-logo5.svg'
import '../Component.css/Footer.css'
import { Link} from 'react-router-dom'
import facebook from'../assets/facebook.png'
import youtube from'../assets/youtube.png'
import instagram from'../assets/instagram.png'
import twitter from'../assets/twitter.png'
import Appstore from'../assets/app-store.png'
import Playstore from '../assets/play-store.png'

function Footer() {
  return (<>
    <div id='mainfooter'>
      <div className='firstfooter'>
        <img src={Logo} alt='logo'/>
        <p className='firstfooterpara'>Maecenas mi justo, interdum at consectetur vel,</p>
        <p className='firstfooterpara'>tristique et arcu. Ut quis eros blandit, ultrices diam in,</p>
        <p className='firstfooterpara'>elementum ex. Suspendisse quis faucibus urna.</p>
        <p className='firstfooterpara'>Suspendisse pellentesque.</p>
      </div>

      <div>
        <h1 className='heading1'>Quick Links</h1>
        <h3 className='heading3'>About</h3>
        <h3 className='heading3'>Cart</h3>
        <h3 className='heading3'>Checkout</h3>
        <h3 className='heading3'>Home</h3>
        <h3 className='heading3'>My account</h3>
        <h3 className='heading3'>Shop</h3>
        <h3 className='heading3'>Contact</h3>

        <h1 className='heading1'> Site Links</h1>
        <h3 className='heading3'>Privacy Policy</h3>
        <h3 className='heading3'> Shipping Details</h3>
        <h3 className='heading3' >Offers Coupons</h3>
        <h3 className='heading3'>Terms & Conditions</h3>
      </div>

      <div>
        <h1 className='heading1'>Download Our Mobile App</h1>
        <p className='firstfooterpara'>Maecenas mi justo, interdum at consectetur vel,</p>
        <p className='firstfooterpara'>tristique et arcu. Ut quis eros blandit, ultrices diam in,</p>
        <p className='firstfooterpara'>elementum ex. Suspendisse quis faucibus urna.</p>
        <p className='firstfooterpara'>Suspendisse pellentesque.</p>

        <h1 className='heading1'>Quick Links</h1>
        <h3 className='heading3'>Know More About Us</h3>
        <h3 className='heading3'> Visit Store</h3>
        <h3 className='heading3' >Let's Connect</h3>
        <h3 className='heading3'>Locate Stores</h3>
        <p className='firstfooterpara'> <img src={Appstore} alt='alat'/>  <img src={Playstore} alt='aal'/></p>
      </div>
      
    </div>

    <div className='lastfootdiv'>
      <p className='foottag'>Copyright © 2024 Furniture Shop | Powered by Furniture Shop</p>
      <div className='foottag'>
        <img  className= 'tag' src={facebook} alt='facbook'/>
        <img  className= 'tag' src={youtube} alt='youtube'/>
        <img className= 'tag' src={instagram} alt='instagram'/>
        <img className= 'tag' src={twitter} alt='twitter'/>
   
      </div>
    </div>

  </>
  )
}

export default Footer
