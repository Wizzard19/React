import Producto from "../Components/Producto";
import React, {useState,useEffect} from "react";
import {getAll} from '../Services/ProductosServices';


function HomePage() {

  const [loading,setLoading]= useState (true)
  const [productos,setProductos]= useState([])
  
  
  useEffect(
    ()=>{

       /*getAll()
      .then(data=>{
        console.log("data",data)
        if(data.results){
        setProductos(data.results)
        setLoading(false)    
        }
      })*/

      
      
      async function request(){
        const response = await getAll()
        //console.log("response",response)
        if(response.data.results){
          //setProductos(data.results)
          //setLoading(false)
          setProductos(response.data.results)
          setLoading(false)
        }
      }
      request()

    },
    []
  )
  if(loading){

    return (
      <div className="Producto">    
        Loading ...
      
    
      </div>

  
    );
  }else{
    
    return(
      <div lassName="Producto">

        <button>Ver Detalle</button>

        {productos.map(productos=><Producto datos={productos} />)}

        

      </div>

      /*<div lassName="Producto">
        {productos.map(productos=><div>{productos.title}</div>)}

      </div>*/
    )
}

}

export default HomePage;
