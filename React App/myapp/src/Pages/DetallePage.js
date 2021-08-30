import React, {useState} from "react";
import {useParams} from "react-router-dom";


function DetallePage() {

  const [loading,setLoading]= useState (true);
  const {id} = useParams();
  console.log(id)
  
 
  if(loading){

    return (
      <div className="Producto">    
        Loading Details...
      
    
      </div>

  
    );
  }else{
    
    return(
      <div lassName="Producto">

        <button>Ver Detalle</button>

        Detalle



      </div>

      /*<div lassName="Producto">
        {productos.map(productos=><div>{productos.title}</div>)}

      </div>*/
    )
}

}

export default DetallePage;
