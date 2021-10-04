import AuthContext from './Context/AuthContext';
import {Navbar,Nav,Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Menu(){

   return(

       <AuthContext.Consumer>
          {
             context=>
            
             <Navbar bg="dark" variant="dark">
             <Container>
             <Navbar.Brand href="/">Meelanesha</Navbar.Brand>
             <Nav className="me-auto">
               <Nav.Link as={Link} to="/">Inicio</Nav.Link>
               
               
               {
                     
                     context.userLogin &&
                     <>
               <Nav.Item as="li">
                      <Nav.Link as={Link} to="/abmProd">Productos</Nav.Link>
                   </Nav.Item>
                     
                 <Button variant="outline-info" onClick={()=>context.logoutUser()}>Logout</Button>
                   </>
                   }

{
                      !context.userLogin &&
                      <>
                      <Nav.Item as="li">
                   <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                   <Nav.Link as={Link} to="/Registro">Registro</Nav.Link>
                </Nav.Item>      

                    </>
                   
                   }


             </Nav>
             </Container>
           </Navbar>            
            
             
         }  
          
      </AuthContext.Consumer>
    
      

    )
 }
    
    export default Menu;