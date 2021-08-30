/*asd*/
import React, {useState,useEffect} from "react";


function Count() {

  const [cantidad,setCantidad]=useState(0)
  const [mensaje,setMensaje]=useState('')

  useEffect(()=>{
    console.log("Cambios realizados")
    
    if (cantidad<0){
      setMensaje('Numero Negativo')
    }else{
      setMensaje('')
    }

  }, [cantidad])
  

  return (
    <div>
      
      La cantidad de veces que hiciste clic es: {cantidad} veces. <br></br>
      
      <button onClick={()=>setCantidad(cantidad+1)}>Increase</button>
      <button onClick={()=>setCantidad(cantidad -1)}>Decrease</button>
      <button onClick={()=>setCantidad(0)}>Reset</button>
      <div>{mensaje}</div>

    </div>
  );
}

export default Count;
