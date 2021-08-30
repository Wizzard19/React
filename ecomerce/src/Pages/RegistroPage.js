import React from "react";
import { Link } from "react-router-dom";


function RegistroPage() {

  
  const handleSubmit = (event)=>{
    alert("Gracias por registrarse") 
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario: </label>
          <input type="text" />
        </div>

        <div>
          <label>Contraseña: </label>
          <input type="password" />
        </div>

        <div>
          <label>Confrirmar contraseña: </label>
          <input type="Password" />
        </div>

        <div>
          <label>Mail: </label>
          <input type="email" />
        </div>
        <button >Registrarme</button>
      </form>
    </div>
  );
}

export default RegistroPage;
