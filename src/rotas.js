import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Cadastro from './paginas/Cadastro/Cadastro';
import Login from './paginas/Login/Login';
import Principal from './paginas/Principal/Principal';
import NotFound from './paginas/NotFound/NotFound';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Login/>} />
                <Route exact={true} path="/Principal" element={<Principal/>} />
                <Route exact={true} path="/Cadastro" element={<Cadastro/>} />
                <Route exact={true} path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
