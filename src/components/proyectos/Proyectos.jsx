import React from 'react'

//13 importamos el Sidebar
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
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