import Productos from "./Productos";
import React, {useState} from 'react'

function Producto() {
  
  const [texto,SetTexto]= useState ('')

  return (

    

    <div className="Producto">
    
      <Productos nombre="Pelota de basket" descripcion="GF7" precio="$4800" SKU="0012356" stock="2"/>

      <button onClick={()=>SetTexto('Gracias por su compra')}>Comprar</button>
      
      <p>{texto}</p>
    
    </div>
  );
}

export default Producto;