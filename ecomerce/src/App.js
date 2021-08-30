
import './App.css';
import MainPage from './Pages/MainPage';
import Menu from './Components/Menu';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistroPage from './Pages/RegistroPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import DetallePage from './Pages/DetallePage';


function App() {
  return (
    <Router>
      
        


        <Menu />
        <Switch>
          
          <Route path="/Registro">
              <RegistroPage />
          </Route>

          <Route path="/Home">
              <HomePage />
          </Route>
          

          <Route path="/Login">
              <LoginPage />
          </Route>
          
          
          <Route path="/producto/:id">
              <DetallePage />
          </Route>
          
          <Route path="/">
              <MainPage />
          </Route>
          </Switch>
        
        </Router>
  );
}

export default App;
