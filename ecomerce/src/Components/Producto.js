import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import AuthContext from '../Components/Context/AuthContext'
import AlertCustom from './AlertCustom';

function Producto(props){

  const [alert,setAlert] = useState({variant:"", text:""})
  const {datos} = props
  const verDetalle = (props.verDetalle!==false?true:false)
  const styles = {
    card:{
      marginBottom:"10px",
      display:"inLine-block",
      width:"250px",
      margin: "10px"
    },
    button:{
      marginBottom:"10px",
      width:"150px",
      
    }
    
  }

  console.log(verDetalle)
  return(
    <AuthContext.Consumer>
      {
        context=>
      
    <>
      
    <Card style={styles.card}>
     
      <Card.Body>
        <Card.Title>{datos.nombre}</Card.Title>
          <Card.Text>{datos.descripcion}
          <p>Precio: $ {datos.precio}</p>
          <AlertCustom variant={alert.variant} text={alert.text}/>
          </Card.Text>
      
     
      </Card.Body>

       
      
    

      
    
  { props.delete &&
  <Button variant="outline-secondary" style={styles.button} onClick={()=>props.delete(datos.id)}>Eliminar</Button>}
  
  { props.update  &&  
    <Button variant="outline-light" style={styles.button}><Link to=  {'Producto/modificar/'+datos.id}>Editar</Link></Button>
  }
  
    
  {
    context.userLogin &&
    
    <Button variant="secondary" style={styles.button} onClick={()=>setAlert({variant:"success", text:"Gracias por su compra"})}>Comprar</Button>
    
    
  }  
</Card>
    </>}
    
    </AuthContext.Consumer>
  )

}

export default Producto;