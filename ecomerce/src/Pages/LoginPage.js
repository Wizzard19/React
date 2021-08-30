import React from "react";
import {
  Link
} from 'react-router-dom';


function LoginPage() {
  
  const handleSubmitLogin = (event)=>{
    console.log(handleSubmitLogin)
    

  }
  
  return (
    <div>

      <h3>Bienvenido</h3>

      <form onSubmit={handleSubmitLogin}>
        <div>
          <label>Usuario: </label>
          <input type="text" />
        </div>

        <div>
          <label>Contraseña: </label>
          <input type="password" />
        </div>

        <button>Login</button>

      </form>
      <p>¿No tiene cuenta?</p>
      <p><Link to="/Registro">Haz click aqui</Link></p>

    </div>
  );
}

export default LoginPage;
