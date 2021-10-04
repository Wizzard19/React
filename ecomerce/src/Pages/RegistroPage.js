import React, {useState} from "react";
import {Button} from 'react-bootstrap'
import FormGroup from '../Components/Forms/FormGroup'
import { useForm } from "react-hook-form";
import firebase from '../Config/firesbase';
import AlertCustom from '../Components/AlertCustom';


function RegistroPage() {
  
  const styles = {
    reg:{
      marginTop:"20px"
    },
    form:{
      display: "block",
      
    }
  }


  const [alert,setAlert] = useState({variant:"",text:""})
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data)=>{
    console.log("handleSubmit RHF", data)
    try{
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.contraseña)
    console.log("User", responseUser.user.uid)
    if(responseUser.user.uid){
      const document = await firebase.firestore().collection("usuarios")
        .add({
          nombre:data.nombre,
          apellido: data.apellido,
          email: data.email,
          contraseña: data.contraseña,
          userId: responseUser.user.uid
        
        }
        )
        console.log("Documento",document)
        setAlert({variant:"success", text:"Registro exitoso"})
    }
    }catch(e){
      console.log("error",e)
      setAlert({variant:"danger", text:e.message})
    }

  }
  return (
    <div style={styles.reg}>     

    <h2>Create una cuenta en nuestra App</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        
        <FormGroup label="Nombre" name="nombre" type="text" placeholder="Ingrese nombre" register={{...register("nombre",{ required: true})}}/>
        <FormGroup label="Apellido" name="apellido"type="text" placeholder="Ingrese Apellido" register={{...register("apellido",{ required: true})}} />
        {errors.apellido && <span>El campo es obligatorio</span>}
        <FormGroup label="Email" name="email" type="email" placeholder="Coloque su correo" register={{...register("email",{ required: true})}} />
        {errors.email && <span>El campo es obligatorio</span>}
        <FormGroup label="Contraseña" name="contraseña" type="password" placeholder="Ingrese Contraseña" register={{...register("contraseña",{ required: true})}}/>

        <Button variant="primary" type="submit">Registrarme</Button>

        <AlertCustom variant={alert.variant} text={alert.text}/>
      </form>
    </div>
  );
}

export default RegistroPage;
