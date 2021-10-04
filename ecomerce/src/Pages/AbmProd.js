import React, { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';
import FormGroup from '../Components/Forms/FormGroup';
import { useForm } from 'react-hook-form';
import firebase from '../Config/firesbase';
import AlertCustom from "../Components/AlertCustom";
import Producto from '../Components/Producto'

function AbmProd(){


const [alert,setAlert] = useState({variant:"", text:""})  
const [reload,setReload]=useState(false)
const [productos,setProductos]=useState ([])
const { register, handleSubmit} = useForm();
const onSubmit = async (data)=>{
  console.log("handleSubmit", data)
try{
  const document = await firebase.firestore().collection("productos")
    .add(data)  
    setAlert({variant:"success", text:"Producto agregado"})
    console.log("Document",document)
    setReload(true)
  }catch(e){
    console.log("Error",e)
  }

}
//Listar los productos
const getProductos = async ()=>{
  try{
  const querySnapshot = await firebase.firestore().collection("productos")
  .get()
    setReload(false)
  setProductos(querySnapshot.docs)
  
  }catch(e){

  }
}
useEffect(
  ()=>{
    getProductos()
  },
  []
)
//reload
useEffect(
  ()=>{
    if(reload)
    getProductos()
  },
  [reload]
)
//Eliminar los productos
const handleDelete = async (id)=>{
  try{
    const document = await firebase.firestore().doc("productos/"+id)
    .delete();
    console.log(document)
    setAlert({variant:"success", text:"Producto Eliminado"})
    setReload(true)
  }catch(e){

  }
}

  return(
    
    
    <div>
      <h4>Productos</h4>
      {productos.map((producto)=><Producto key={producto.id} datos={{...producto.data(),id:producto.id}} delete={handleDelete} update={true}/>)}
      
      <h5>alta de productos</h5>
      <form onSubmit={handleSubmit(onSubmit)} >

      <FormGroup label="Nombre" name="nombre" type="text" placeholder="Ingrese Producto" register={{...register("nombre",{ required: true})}}/>
      <FormGroup label="Precio" name="precio" type="text" placeholder="Precio" register={{...register("precio",{ required: true})}}/>
      <FormGroup label="Descripción" name="descripcion" placeholder="Descripción breve" type="text" register={{...register("descripcion",{ required: true})}}/>
      <FormGroup label="SKU" name="SKU" type="text" placeholder="Registre el N° de SKU" register={{...register("SKU",{ required: true})}}/>
      

      <Button variant="primary" type="submit">Crear</Button>
        
      </form>
      <AlertCustom variant={alert.variant} text={alert.text}/>
    </div>

  )



}

export default AbmProd;