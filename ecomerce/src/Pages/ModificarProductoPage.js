import React,{useState,useEffect} from "react"
import {
  useParams,
  Link
} from "react-router-dom";
import { useForm } from 'react-hook-form';
import firebase from '../Config/firesbase';
import { Button } from 'react-bootstrap'
import FormGroup from '../Components/Forms/FormGroup';
import AlertCustom from "../Components/AlertCustom";


function ModificarProductoPage(props){
  

  const [alert,setAlert] = useState({variant:"",text:""})
  const [loading,setLoading] = useState(true);
  const {id} = useParams()
  console.log(id)
  const { register, handleSubmit, setValue} = useForm();

  const onSubmit = async (data)=>{
    console.log("handleSubmit RHF", data)
    setAlert({variant:"success", text:"Modificación guardada"})
    try{
      const document = await firebase.firestore().doc("productos/"+id)
      .set(data)
      console.log(document)

    }catch(e){
      console.log("Error",e)
    }
   
  }
   
  /*if(props.match.params.id){
    console.log(props.match.params.id)
  }*/
 
  useEffect(
    ()=>{
      async function request(){
        const response = await firebase.firestore().doc("productos/"+id)
        .get()

        if(response){
            
          setValue("nombre",response.data().nombre)
          setValue("precio",response.data().precio)
          setValue("descripcion",response.data().descripcion)
          setLoading(false)
          
        }
      }
      request()
    },
    [id, setValue]
  )

if (loading){
  return(

    <div>
      Loading...
    </div>
  );
}else{
  return(
    <div >     
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <h2> Modificar Producto </h2>

        <FormGroup label="Nombre" name="nombre" type="text" placeholder="Ingrese nombre" register={{...register("nombre",{ required: true})}}/>
        <FormGroup label="Precio" name="precio" type="text" placeholder="Ingrese precio" register={{...register("precio",{ required: true})}}/>
        <FormGroup label="Descripción" name="descripcion" type="text" placeholder="Ingrese Descripción" register={{...register("descripcion",{ required: true})}}/>
        
        <Button variant="secondary" type="submit">Guardar</Button>
        <Button variant="outline-light"><Link to="/abmProd">Volver</Link></Button> 
               
      </form>
      <AlertCustom variant={alert.variant} text={alert.text}/>
    </div>
  )
  }
}

export default ModificarProductoPage;
