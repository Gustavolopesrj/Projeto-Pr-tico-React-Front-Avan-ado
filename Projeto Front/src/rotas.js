import React from 'react'
import { Switch, Route} from 'react-router-dom';
import PaginaInicial from './Pages/PaginaInicial'
import Formulario from './Pages/Formulario/Formulario'

import Produtos from './Pages/Produtos/Produtos';
import Lojas from './Pages/Lojas';

function Rotas() {
    return (
        
            <Switch>
            
                
                <Route exact path="/" component={PaginaInicial} />
                <Route exact path="/Formulario" component={Formulario} />
            <Route exact path="/Produtos" component={Produtos} />
            <Route exact path="/Lojas" component={Lojas} />
            </Switch>
        
    )
}
export default Rotas;