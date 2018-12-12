import React, { Component} from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import login from './user';
import school from './school';
import budget from './budget';
import humanResources from './human_Resources';
import admin from './admin';
import UserRegister from './user/registroUsuario';
import ClaveOlvidada from './user/olvidoClave';

class routerPrincipal extends Component {
  render() {
    return (
        <div className="contet">
        <Router>
        <div>
         <ul className="navbar-nav mr-auto">
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to='/'>home</Link>
              </li>
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to='/Escuela'>Escuela</Link>
              </li>
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to='/Presupuesto'>Presupuesto</Link>
              </li>
              <li className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to='/RRHH'>RRHH</Link>
              </li>
               <li  className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
              <Link to='/Admin'>admin</Link>
              </li>
          </ul>

            <Switch>
                <Route exact path="/" component={login} />
                <Route  path="/Escuela" component={school} />
                <Route  path="/Presupuesto" component={budget} />
                <Route  path="/RRHH" component={humanResources} />
                <Route  path="/Admin" component={admin} />
                <Route  path="/Registro" component={UserRegister} />
                <Route  path="/OlvidoClave" component={ClaveOlvidada} />
              </Switch>
              </div>
        </Router>
        </div>
    )
  }
}

export default routerPrincipal;
