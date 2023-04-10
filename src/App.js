import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//3.importamos los componentes que queremos mostrar en el componente principal app.
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

import ProyectoState from './context/proyectos/proyectoState'

function App() {
  return (

    <ProyectoState>

      {/* //1. aca definimos lo que se va a ver en todas las paginas, esto es dentro del router */}
      <Router>

        {/* 2. en routes se va a ver cada una de las paginas */}
        <Routes>

          {/* 2.1 definimos nuestras rutas, que hacen referencia a los componentes  */}
          <Route exact path= '/' element={<Login/>} />
          <Route exact path= '/nueva-cuenta' element={<NuevaCuenta/>} />
          <Route exact path= '/Proyectos' element={<Proyectos/>} />

        </Routes>

      </Router>
      
    </ProyectoState>

    
);
}

export default App;
