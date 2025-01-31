import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import './App.css';
import Rodape from 'componentes/Rodape';
import PaginaPadrão from 'componentes/PaginaPadrao';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="/" element={<PaginaPadrão />}>
        <Route path="/" element= {<Inicio/>} />
        <Route path="/sobremim" element= {<SobreMim/>} />
        </Route>
        <Route path="*" element= { <div>Página não encontrada</div>  } />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;