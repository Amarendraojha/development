import React from 'react'
import '../Component.css/Layout.css'
import OrganicProduct from '/home/user/OrganicStore/src/assets/organic-products-hero.png'
import leaf from'/home/user/OrganicStore/src/assets/logo-leaf-new.png'
import additem from'/home/user/OrganicStore/src/assets/additem.png'
import delivery from'/home/user/OrganicStore/src/assets/free-delivery.png'
import certified from'/home/user/OrganicStore/src/assets/guaranteed.png'
import saving from'/home/user/OrganicStore/src/assets/profit.png'
import profit from'/home/user/OrganicStore/src/assets/return.png'
import ProductStorage from '../SubPages.jsx/ProductStorage'
import Decoration from '../SubPages.jsx/Decoration'
import goodreview from'../assets/good-review.png'
import client1 from'../assets/client01-free-img.png'
import client2 from'../assets/client02-free-img.png'

function Layout() {
  return (<>
<div className='maindiv'>

      <div className='imagecontainer'>
        <div className='organicproduct'><img src={OrganicProduct}  alt='image'></img></div>

        <div className='secondimgcontainer'>
          <img className='secondimgdiv'src={leaf}  alt="leaf"></img>
          <h2 className='secondimgdiv'> Best Quality Products</h2>
          <h1 className='secondimgdivh1'>Join The Organic</h1>
          <h1 className='secondimgdivh1'>Movement!</h1>
          <p className='secondimgdiv'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,</p>
          <p className='secondimgdiv'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className='secondimgdivbutt'><img className='secondimgdivbutti' src={additem} alt= "add"></img>SHOP NOW</button>
        </div>

      </div>

 </div>

<div className='maincerti'>

<div className='brandtag'> <h1 className='brand'><img src={delivery} alt='shipping'/>
Free Shipping
</h1>
<p> Above $5 Only</p>
</div>

<div className='brandtag'><h1 className='brand'><img src={certified} alt='certified'/>
Certified Organic
</h1>
<p>100% Guarantee</p>
</div>

<div className='brandtag'> <h1 className='brand'><img src={saving} alt='saving'/>
Huge Savings
</h1>
<p>At Lowest Price</p>
</div>

<div className='brandtag'><h1 className='brand'> <img src={profit} alt='return'/>
Easy Returns
</h1>
<p>No Questions Asked</p>
</div>

</div>

<div className='bestsellingproduct'>
  <h1 className='selh'> Best Selling Products</h1>
  <img className='pimg' src={leaf} alt='leaf'></img>
    <ProductStorage></ProductStorage>
</div>

  <Decoration></Decoration>
  
  <div className='registration' >
    <div className='firstdivregistration'>  
      <h1>Get 25% Off On Your First Purchase!</h1>
      <button className='secondimgdivbutt'><img className='secondimgdivbutti' src={additem} alt= "add"></img>SHOP NOW</button>
    </div>
    <h1 className='registhead'>Try It For Free. No Registration Needed.</h1>
  </div>

  <div className='Trandingproduct'>
  <h1 className='selh'> Trending Products</h1>
  <img className='pimg' src={leaf} alt='leaf'></img>
    <ProductStorage></ProductStorage>
  </div>

<div className='Customerdiv'>
  <h1 className='selh'> Customers Reviews</h1>
  <img className='customerimg' src={leaf} alt='leaf'></img>

  <div className='Customerreviewmaindiv'>

     <div className='Customerreview1' > 
       <img src={goodreview} alt='str'/>
       <p className='Customerpara'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
       <img src={client1} alt='str'/>
     </div>

     <div className='Customerreview2'>
        <h1> Deal Of The Day 15% Off On All Vegetables! </h1>
        <p className='Customerpara'>I am text block. Click edit button to change this tex em ips.</p>
     </div>

     <div className='Customerreview3'>
     <img src={goodreview} alt='str'/>
     <p className='Customerpara'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
       <img src={client2} alt='str'/>
     </div>

  </div>

</div>



    </>
  )
}

export default Layout