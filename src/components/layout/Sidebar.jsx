import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';


//12 este componente tiene el aside
const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            {/* 18 importamos el componente al Sidebar */}
            <NuevoProyecto/>
            <div className="proyectos">
                
                <h2>Tus Proyectos</h2>
                {/* 25 importamos el componente listado proyectos para renderizar los proyectos en el aside */}
                <ListadoProyectos/>
            </div>
        </aside>
    );
}

export default Sidebar;