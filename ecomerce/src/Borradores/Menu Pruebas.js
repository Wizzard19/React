//este componenete fue creado para hacer una prueba del Login y por seguridad preferí dejarlo guardado

/*import Nav from 'react-bootstrap/Nav'
import AuthContext from './Context/AuthContext';


function Menu(){

   return(

       <AuthContext.Consumer>
          {
             context=>

             <div className="menu">
        
        
              <Nav defaultActiveKey="/home" as="ul">
                 <Nav.Item as="li">
                    <Nav.Link href="/">Inicio</Nav.Link>
                  </Nav.Item>
                   
                   {
                     
                     context.userLogin &&
                     <>
               <Nav.Item as="li">
                      <Nav.Link href="/abmProd">Productos</Nav.Link>
                   </Nav.Item>
                     
                 <button onClick={()=>context.logoutUser()}>Logout</button>
                   </>
                   }
                       
                       {
                      !context.userLogin &&
                      <>
                      <Nav.Item as="li">
                   <Nav.Link href="/Login">Login</Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                   <Nav.Link href="/Registro">Registro</Nav.Link>
                </Nav.Item>      

                    </>
                   
                   }
                 
            </Nav>
      </div>
         }  
          
      </AuthContext.Consumer>
    
      

    )
 }
    
    export default Menu;*/