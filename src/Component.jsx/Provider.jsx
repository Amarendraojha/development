import React, { useEffect, useState } from "react";
import Json4data from '../JsonFile.json/Json4data.json';
import Json9data from '../JsonFile.json/Json9data.json';


export const Context = React.createContext([]);

const Provider = props => {

    const [data, setData] = useState([]);
    const [Product, setProduct] = useState([]);

    useEffect(() => {
      setData(Json4data);
      setProduct(Json9data);
   }, []);

  
    return (
      <Context.Provider value={ {data,Product}}>
         {props.children}
      </Context.Provider>
    );
  };


  export default Provider