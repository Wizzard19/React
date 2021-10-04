import React, {useContext, useState}from 'react'
import {
  Link
} from 'react-router-dom';
import FormGroup from '../Components/Forms/FormGroup'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import firebase from '../Config/firesbase';
import AuthContext from '../Components/Context/AuthContext';
import AlertCustom from '../Components/AlertCustom';

function LoginPage() {
  
  const [alert,setAlert] = useState({variant:"",text:""})
  const context = useContext(AuthContext)  
  const { register, handleSubmit }= useForm();
  const onSubmit = async (logData)=>{
    console.log("submit", logData)
  try{
    const responseLogin = await firebase.auth().signInWithEmailAndPassword(logData.email, logData.contraseña)
    console.log("User", responseLogin.user.uid)
    if(responseLogin.user.uid){

      context.loginUser()     
      setAlert({variant:"success", text:"Login Exitoso"})
    }
    
   }catch(e){
     console.log("Error", e)
     setAlert({variant:"danger", text:e.message})
   }
  }
  


  return (
    <div>

      <h3>Bienvenido</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        
      <FormGroup label="Email" name="email" type="text" register={{...register("email",{ required: true})}}/>
      <FormGroup label="Contraseña" name="contraseña" type="password" register={{...register("contraseña",{ required: true})}}/>
      
        
      <Button variant="secondary" type = "submit">Login</Button>
      <AlertCustom variant={alert.variant} text={alert.text}/>
      </form>
      <p>¿No tiene cuenta?</p>
      <Button variant="outline-light"><Link to="/Registro">Haz click aqui</Link></Button>

    </div>
  );
}

export default LoginPage;
