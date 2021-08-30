import React, {useState,useEffect} from 'react'


function HOOK() {

  const [titulo,setTitulo]= useState('Prueba Titulo')



  return (
    <div>
    <p>{titulo}</p>

    <button onClick={()=>setTitulo('Cambiaste el titulo')}>Prueba cambio</button>
    <button onClick={()=>setTitulo('Prueba Titulo')}>Prueba Reset</button>


    </div>
  );
}

export default HOOK;
