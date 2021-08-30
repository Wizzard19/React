import React from 'react';

function DetailProduct(props){

  const {datos} = props
  return(
    <div>
      <h3>Articulo : {datos.title}</h3>
      <img src={datos.thumbnail}/>
      <p>Precio : {datos.currency_id}{datos.price}</p>
      <p>Ubicación Vendedor: {datos.address.state_name}, {datos.address.city_name}</p>
      <p>Stock: {datos.sold_quantity}</p>
      
      <button>Comprar ahora</button>
      
    </div>
  )
}

export default DetailProduct;