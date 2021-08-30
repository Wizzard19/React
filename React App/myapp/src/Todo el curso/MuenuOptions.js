import React,{Component} from "react"

class MuenuOptions extends Component{
  render(){
    console.log(this.props.nombre)
    
    return(
            <li>{this.props.nombre}</li> 

      

      
    )
  }
}

export default MuenuOptions;