import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from '../Constants/Routes';
import Inicio from '../Pages/Inicio';
import Nosotros from '../Pages/Nosotros.js';
import Objetivos from '../Pages/Objetivos';
import Proyectos from '../Pages/Proyectos.js';
import Recursos from '../Pages/Recursos.js';
import Noticias from '../Pages/Noticias.js';
import UneteNosotros from '../Pages/UneteNosotros.js';

const Routers = () => {
   return (
      <div>
         <Router>
            <Switch>
               <Route exact path={Routes.Inicio} component={() => <Inicio></Inicio>} />
               <Route exact path={Routes.Nosotros} component={() => <Nosotros></Nosotros>} />
               <Route exact path={Routes.Objetivos} component={() => <Objetivos></Objetivos>} />
               <Route exact path={Routes.Proyectos} component={() => <Proyectos></Proyectos>} />
               <Route exact path={Routes.Recursos} component={() => <Recursos></Recursos>} />
               <Route exact path={Routes.Noticias} component={() => <Noticias></Noticias>} />
               <Route exact path={Routes.UneteNosotros} component={() => <UneteNosotros></UneteNosotros>} />
            </Switch>
         </Router>
      </div>
   );
};

export default Routers;







