import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

function App() {
  return (

    //1. aca definimos lo que se va a ver en todas las paginas
    <Router>


      {/* 2. aca se va a ver lo que se ve por fuera */}
      <Routes>
        {/* 2.1 definimos nuestras rutas  */}
        <Route exact path= '/' element={<Login/>} />
        <Route exact path= '/nueva-cuenta' element={<NuevaCuenta/>} />
        <Route exact path= '/Proyectos' element={<Proyectos/>} />
      </Routes>


    </Router>
);
}

export default App;
