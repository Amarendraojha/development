import React from 'react'
import'../SubPages.css/Decoration.css'
import basilleaf from '../assets/basil-leaf.png'

function Decoration() {
  return (
   <div className='maindecoration'>
      <img  className='basilleaf'src={basilleaf} alt='img'/>  
     <div className='backgroundmaindiv'>

        <div className='firstbackgroundmaindiv'> 
            <h1 className='fbgmd'> Farm Fresh Fruits</h1>
            <p className='fbgmd'>Ut sollicitudin quam vel purus tempus, </p>
            <p className='fbgmd'> vel eleifend felis varius.</p>
            <button className='fbgmdbut'>SHOP NOW</button>
        </div>


        <div className='secondbackgroundmaindiv'>
            <h1 className='fbgmd'> Fresh Vegetables</h1>
            <p className='fbgmd'>Ut sollicitudin quam vel purus tempus, </p>
            <p className='fbgmd'> vel eleifend felis varius.</p>
            <button className='fbgmdbut'>SHOP NOW</button> 
        </div>


        <div className='thirdbackgroundmaindiv'> 
            <h1 className='fbgmd'> Organic Legume</h1>
            <p className='fbgmd'>Ut sollicitudin quam vel purus tempus, </p>
            <p className='fbgmd'> vel eleifend felis varius.</p>
            <button className='fbgmdbut'>SHOP NOW</button>
        </div>

      </div>
    </div>
  )
}

export default Decoration