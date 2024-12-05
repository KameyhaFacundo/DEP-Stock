import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer';
import Login from './components/Views/Login';
import { useState } from 'react';
import RutasProtegidas from './components/Routes/RutasProtegidas';
import RutasAdministrador from './components/Routes/RutasAdministrador';

function App() {

  const usuarioEnLocalStorage = JSON.parse(sessionStorage.getItem('user')) || {}; 
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioEnLocalStorage);

  const logout = () =>
  { 
    sessionStorage.removeItem('user');
    setUsuarioLogueado({});
  }
  return (
    <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route exact path='/' element={<Login usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route path='/home/*' element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
