
import React from "react";
import { Link } from "react-router-dom";
function Producto(props){

  const {datos} = props 
  return(

    <div>

      <h3>Articulo : {datos.title}</h3>
      <img src={datos.thumbnail}/>
      <p>Precio : {datos.currency_id}{datos.price}</p>
      <p>Ubicación comprador: {datos.address.state_name}, {datos.address.city_name}</p>
      <p>Stock: {datos.sold_quantity}</p>
      
      <Link to={'Producto/'+datos.id}>Ver detalle</Link>

    </div>


  )

}
  
export default Producto;