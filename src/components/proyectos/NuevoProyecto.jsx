import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //obtenemos el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario } = proyectosContext

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    const {nombre} = proyecto

    const onChangeProyecto = e => {
        guardarProyecto ({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault()
    }

    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >Nuevo Proyecto</button>

            {
                formulario ? 
                (
                    <form 
                onSubmit={onSubmitProyecto}
                className='formulario-nuevo-proyecto'
            >
                <input 
                    type="text"
                    className='input-text' 
                    placeholder='Nombre Proyecto'
                    value={nombre}
                    name='nombre'
                    onChange={onChangeProyecto}
                />

                <input 
                    type="submit" 
                    className='btn btn-primario btn-block'
                    value='Agregar Proyecto'
                />
            </form>
                ) : null
            }
        </Fragment>
    );
}

export default NuevoProyecto;