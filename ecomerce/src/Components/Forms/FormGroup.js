import React from "react";
import {Form} from 'react-bootstrap'




function FormGroup(props) {

const {label} = props

  return (
    
    
        <Form.Group className="mb-3" >
    <Form.Label>{label}</Form.Label>
    <Form.Control type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} {...props.register}/>
  </Form.Group>
  
    
    
  );
}

export default FormGroup;
