import {
    Link,
    NavLink
} from 'react-router-dom';




function Menu(){

    return(
    
      <div className="menu">
        
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Registro">Registro</NavLink>
          <NavLink to="/Home">Home</NavLink>
          
          
        
    
    
      </div>
    
    
    )
    
    
    }
    
    export default Menu;