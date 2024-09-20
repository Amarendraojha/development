import React, { useContext } from "react";
import { Context } from "../Component.jsx/Provider";
import '../SubPages.css/ProductStorage.css'
import { Link} from 'react-router-dom'



const ProductStorage = () => {
    const { data} = useContext(Context);

    return (
        <>
            <div className="maidivbestseller" >

                {data.map((data,id) =>(
                <div className='productmain' key={id}>
                     <nav>
                         <Link to='/ProductCount'>
                             <img className="productimg"  src={data.image} alt='image'/>
                         </Link>
                     </nav> 
                      <p>{data.type}</p>
                      <h2 className="productnamehead"> {data.productname}</h2>
                      <div className="star">
                          <img className="productimgstar" src={data.star} alt='image'/>
                      <p className="pricepara"> {data.price}</p>
                      </div>
                </div>) )}
            
            </div>
            
        </>
    );
};

export default ProductStorage;
