import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

// 14 este componente tiene el formulario para agregar los nuevos proyectos.
const NuevoProyecto = () => {

    //obtenemos el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario, mostrarFormulario } = proyectosContext

    //18. creamos el useState para guardar los datos llenados en el formulario , este objeto vaa tener solo una característica, y podría ser su estado inicial un string vació, pero mas adelante queremos con una librería insertar un id para poder hacer el crud tomando el valor de ese id, por esta razón es un objeto y no un string vació su estado inicial.
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })


    //19. extraemos los valores de proyecto usando un destructuring
    const {nombre} = proyecto

    //20. le damos valor a la variables del estado inicial proyecto
    const onChangeProyecto = e => {
        guardarProyecto ({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //21.1 function para que el usuario envié un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault()
    }

    return ( 
        <Fragment>

            {/* 15 agregamos un boton al cual el usuario va a apretar y se vaa mostrar el formulario de nuevo proyecto */}
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick= {() => mostrarFormulario()}
            >Nuevo Proyecto</button>

            {
                formulario ? 
                (
                    /* 16 este es el formulario que aparece tras apretar el boton */
                    <form
                        //21. ponemos el onSubmit para que al dar click en el boton enviemos y validemos la info
                        onSubmit={onSubmitProyecto}
                        className='formulario-nuevo-proyecto'
                    >
                        {/* 17 aca ponemos los inputs que va a tener este formulario */}
                        <input 
                            type="text"
                            className='input-text' 
                            placeholder='Nombre Proyecto'
                            value={nombre}
                            name='nombre'

                            //20.1 function para tomar los datos del nombre del proyecto
                            onChange={onChangeProyecto}
                        />
                        {/* 17.1 agregamos el boton del formulario */}
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