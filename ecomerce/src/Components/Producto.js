import React from 'react';
import {
  Link
} from 'react-router-dom';
function Producto(props){

  const {datos} = props
  return(
    <>
    <div>
      <h3>Articulo : {datos.title}</h3>
      <img src={datos.thumbnail}/>
       
      
    </div>

    <h6><Link to={'Producto/'+datos.id}>Ver detalle</Link></h6>  
    

    </>
  )
}

export default Producto;