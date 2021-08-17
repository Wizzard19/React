import './Form.css';

function formMain(){
  return(

    <div className="formBody">
 <div className="formMain">
   <label type="text">Nombre</label>
   <input
   id="nombre_id"
   name="Nombre"
   type="text"
   placeholder="Inserte Nombre"
   ></input>
   
   <label>Apellido</label>
   <input
   id="apellido_id"
   name="Apellido"
   type="text"
   placeholder="Ingrese Apellido"
   ></input>

   <label type="email">Email *</label>
   <input
   id="email_id"
   name="Email"
   type="email"
   placeholder="Ingrese Mail"
   ></input>

   <label>Telefono</label>
   <input 
   id="tel_id"
   name="Telefono"
   type="number"
   placeholder="Ingrese Telefono sin guión"
   ></input>

   <label>Contraseña *</label>
   <input 
   id="pass_id"
   name="Password"
   type="Password"
   placeholder="Ingrese contraseña"
   ></input>
   
   <label>Confirmación *</label>
   <input 
   id="passc_id"
   name="Password"
   type="Password"
   placeholder="Confirme Contraseña"
   ></input>

   <div className="formButton">
   
  
     <button className="Button">Registrate!</button>
  
  
    
  
    
     
   </div>      
 </div>
</div> 


  )
}

export default formMain;
