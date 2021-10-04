import React from 'react';
import {
  Link
} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import AuthContext from '../Components/Context/AuthContext'


function Producto(props){

  const {datos} = props
  const verDetalle = (props.verDetalle!==false?true:false)
  const styles = {
    card:{
      marginBottom:"10px"
    },
    button:{
      marginBottom:"10px",
      width:"250px",
      
    }
    
  }

  console.log(verDetalle)
  return(
    <AuthContext.Consumer>
      {
        context=>
      
    <>  
    <Card style={styles.card}>
      <Card.Img variant="top" src="holder.js/100px180"></Card.Img>
      <Card.Body>
        <Card.Title>{datos.nombre}</Card.Title>
          <Card.Text>{datos.descripcion}
          <p>Precio: $ {datos.precio}</p>
          </Card.Text>
      
     
      </Card.Body>

       
      
    

      
    
  { props.delete &&
  <Button variant="outline-secondary" style={styles.button} onClick={()=>props.delete(datos.id)}>Eliminar</Button>}
  
  { props.update  &&  
    <Button variant="outline-light" style={styles.button}><Link to=  {'Producto/modificar/'+datos.id}>Editar</Link></Button>
  }
  
    
  {
    context.userLogin &&
    
    <Button variant="secondary" style={styles.button}>Comprar</Button>
    
    
  }  
</Card>
    </>}
    
    </AuthContext.Consumer>
  )

}

export default Producto;