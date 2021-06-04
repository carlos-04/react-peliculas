import './App.css';
import { Switch, Route } from "react-router-dom";
import Rutas from './Route-config'
import Menu from './components/utils/Menu';
import ConfigurarValidaciones from './Validaciones';

ConfigurarValidaciones();

const App = () => {
  return (
    <>

      <Menu />
      
      <div className="container mt-5">
        <Switch>
          {Rutas.map(ruta => <Route key={ruta.path} path={ruta.path} exact={ruta.exact}>
            <ruta.component />
          </Route>)}
        </Switch>
      </div>


    </>
  );
}

export default App;
