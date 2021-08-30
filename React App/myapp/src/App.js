


import './App.css';
import DetallePage from './Pages/DetallePage';
import Menu from '../src/Todo el curso/Menu';
import HomePage from './Pages/HomePage';
import Registro from './Pages/Registro';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'; 




function App() {
  return (

    
  <Router>
    <Menu />
    
      <Switch>
        <Route path="/registro">
          <Registro />      
        </Route>
        <Route path="/producto/:id">
          <DetallePage />
        </Route>

        <Route Path="/" exact>
          <HomePage />
        </Route>
      </Switch>          
  </Router>
  );
}

export default App;
