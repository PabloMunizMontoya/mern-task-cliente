import React from 'react'

//13 importamos el Sidebar
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autenticacion/authContext';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'



const Proyectos = () => {

    //extraemos los datos de autenticacion
    //extraemos la function que revisa si hay un token
    //todos estos pasos son para guardar el usuario autenticado en el local storage
    const authContext = useContext(AuthContext)
    const {usuario, usuarioAutenticado} = authContext
    const navigate = useNavigate();

    // usamos usuario autenticado que es la función que llama al type OBTENER_USUARIO que se encarga de darle a usuario el valor del usuario autenticado, entonces con un useEffect que se dispara al cargar proyectos llamamos a dicha function.
    useEffect(() => {
        usuarioAutenticado()
        
    },[]) 

    
    if (!usuario){
        navigate('/');
        return null;
    }  

    return ( 
        <div className='contenedor-app'>
            
            {/* 13.1 usamos el componente Sidebar */}
            <Sidebar/>
            
            <div className="seccion-principal">

                {/* 26.1 importamos el componente barra */}
                <Barra/>

                <main>

                    {/* 27.1 usamos el componente FormTarea */}
                    <FormTarea/>

                    <div className="contenedor-tareas">

                        {/* 30 importamos el componente listado de tareas */}
                        <ListadoTareas/>
                        
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;