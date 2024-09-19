import React from 'react'
import '../Pages.css/Juice.css'
import Arrow from '../assets/right-chevron.png'
import scre from "../assets/Screenshot from 2024-09-06 19-03-42.png"
import oil from'../assets/edible-oil-300x300.jpg'
import sanitizer from '../assets/sanitizer-300x300.jpg'
import chilli from '../assets/red-chillies-300x300.jpg'
import ProductStorageEvery from '../SubPages.jsx/ProductStorageEvery'

function Juice() {
  return (
  <div className='mainEverything'>

    <div className='FirstdivEverything'>
    <p className='searchpara'><input type='text' placeholder='Search Products.'  className='Firstinput'/> <button className='Arrowbutton'><img className='Arrow' src={Arrow} alt="asas"/></button></p>
    <h1 className='filterhead'> Filter by price</h1>
    <h1 className='filterheadim'> <img src={scre} alt="aka"/></h1>
    <p className='inpopara'> <input  className='ifpopara ' type="text" placeholder='£10'/> <input  className='ifpopara' type="text" placeholder='£20'/></p>
    <h3 className='Gh3'> Groceries(10)</h3>
    <h3 className='Gh3'> Juice(9)</h3>

<div className='fillproduct'> 
      <img src={oil} alt=""/> 
      < h3 className='Gh3'> Natural Edible oil </h3>
       < h3 className='Gh3'> £30</h3>
</div>

<div className='fillproduct'> 
    <img src={sanitizer} alt=""/> 
   < h3 className='Gh3'> Natural Edible oil </h3>
   < h3 className='Gh3'> £30</h3>
</div>

<div className='fillproduct'> 
    <img src={chilli} alt=""/> 
   < h3 className='Gh3'> Natural Edible oil </h3>
   < h3 className='Gh3'> £30</h3>
</div>

</div>

<div className='SeconddivEverything'>
< h3 className='Gh3s'>Home/Juice </h3>
<h1 className='filterheadshop'> Juice</h1>
<p className='shoppara'>
  <p>Showing 1-9 of 12 results</p>
  <p>Default sorting</p>
</p>
  <ProductStorageEvery/>
  <p className='parabutt'><button className='nextbutton'>1</button> <button className='nextbutton'>2</button> <button className='nextbutton'>---></button></p>

</div>

  </div>
  )
}

export default Juice
