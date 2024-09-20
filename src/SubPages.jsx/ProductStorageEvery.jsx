import React, { useContext } from "react";
import { Context } from "../Component.jsx/Provider";
import '../SubPages.css/ProductStorageEvery.css'
import { Link} from 'react-router-dom'



const ProductStorageEvery = () => {
    const {Product} = useContext(Context);

    return (
        <>
            <div className="maidivbestEvery" >

                {Product.map((Product,id) =>(
                <div className='productmainEvery' key={id}>
                     <nav>
                         <Link to='/ProductCount'>
                             <img className="productimgEvery"  src={Product.image} alt='image'/>
                         </Link>
                     </nav> 
                      <p>{Product.type}</p>
                      <h2 className="productnameheadEvery"> {Product.productname}</h2>
                      <div className="starEvery">
                          <img className="productimgstarEvery" src={Product.star} alt='image'/>
                      <p className="priceparaEvery"> {Product.price}</p>
                      </div>
                </div>) )}
            
            </div>
            
        </>
    );
};

export default ProductStorageEvery;
