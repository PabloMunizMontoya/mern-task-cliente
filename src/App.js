import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//3.importamos los componentes que queremos mostrar en el componente principal app.
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

//37. importamos los estados generados en el state de context a nuestro componente principal, para poder usar esos estados en todo el proyecto
import ProyectoState from './context/proyectos/proyectoState'

//110. importamos el state de tareas provistos por context 
import TareaState from './context/tareas/tareaState'

import AlertasState from './context/alertas/alertasState'

import AuthState from './context/autenticacion/authState'

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)
  return (

    //37.1 englobamos todo el proyecto con los estados para asi poder hace uso de ellos en cada componente.
    <ProyectoState>
        {/* 110.1 englobamos el proyecto entero con los estados dados por context  */}
        <TareaState>
          <AlertasState>
            <AuthState>
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
            </AuthState>  
          </AlertasState> 
        </TareaState>
    </ProyectoState>

    
);
}

export default App;
