import RegistroPage from "../Pages/RegistroPage"
import LoginPage from "../Pages/LoginPage"
import AbmProd from "../Pages/AbmProd"
import ModificarProductoPage from "../Pages/ModificarProductoPage"
import Menu from "../Components/Menu"
import MainPage from "../Pages/MainPage"
import {
  Switch,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap';

function Public() {
    

return(
    <>
    <firebase />
        <Menu />
        
    <Container>
    <Switch>
        <Route path="/Registro">
              <RegistroPage />
          </Route>
          

          <Route path="/Login">
              <LoginPage />
          </Route>

          <Route path="/AbmProd">
              <AbmProd />
          </Route>

          <Route path="/Producto/modificar/:id">
              <ModificarProductoPage />
          </Route>
               
          <Route path="/">
              <MainPage />
          </Route>
          </Switch>
          </Container>
        
        </>
        )
    }
    
    export default Public;