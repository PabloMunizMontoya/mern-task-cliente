import React, {useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

// 27. en este componente estará el formulario para agregar nuevas tareas al proyecto en especifico.
const FormTarea = () => {

    //100. importamos el context y le decimos que function vaa usar
    const proyectosContext = useContext(proyectoContext)

    //100.1 extraemos del context lo que queremos usar en el componente, queremos ocultar el formulario de tareas si proyectos es null. 
    const { proyecto } = proyectosContext

    //120.1 extraemos el context que queremos usar 
    const tareasContext = useContext(TareaContext)

    //120.2 extraemos lo que deseamos usar del context en el componente 
    //124. exportamos validar tarea del context
    const {errorTarea, agregarTarea, validarTarea, obtenerTareas,tareaSeleccionada, actualizarTarea} = tareasContext

    //135 effect que detecta si hay una tarea seleccionada 
    useEffect(() => {
        if(tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    },[tareaSeleccionada ])



    //119. creamos los states locales para tomar los valores del formularios.
    const [tarea, guardarTarea] = useState({
        nombre : ''
    })

    // 120. extraemos el nombre del proyecto usando destructuring, lo extraemos del use state tarea
    const {nombre} = tarea

    //119.1  vamos a leer los valores del formulario en un evento y dárselos al estado de arriba
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    //100.2 como estamos tratando de acceder a un proyecto en el siguiente paso usando el array destructuring, si no hay ningún proyecto va a saltar un error, para prevenir esto: entonces si no hay ningún proyecto el componente y su funcionalidad frena aca, que es lo que queríamos si proyecto es null no me muestres el form para agregar tareas.
    if(!proyecto) return null

    //100.3 proyecto es null en su estado inicial pero si le damos click a un proyecto se activa la function que llena ese proyecto con el proyecto clickeado, este proyecto es un array por lo que queremos obtener sus valores usando array destructuring. 
    const [proyectoActual] = proyecto

    //118.1 creamos el onSUbmit para agregar la tarea
    const onSubmit = (e) => {
        e.preventDefault()

        //124.1 validamos que el nombre de la tarea que es el value tomador del form tenga contenido, si o tiene entonces se activa la function que cambia el estado de errorTarea de false a true, el return hace que se detenga la ejecución.
        if(nombre.trim() === '') {
            validarTarea()
            return
        }

        //136 revisamos si la tarea viene de edición o de nueva tarea
        if (tareaSeleccionada == null) {

            //tarea nueva 
            //120.3 corremos la function que trajimos desde context para agregar la tarea.
            //aca lo que pasa es lo siguiente: como la tarea que vamos a agregar se agrega a un proyecto, y tenemos una información traída desde el context de proyecto que nos trae el proyecto actual con sus valores y uno de esos valores hace referencia al id del proyecto, usaremos ese id para otorgarle a la nueva tarea el mismo id. ademas el estado inicial de tarea es false .. por que pues al ser una tarea nueva se supone que aun esta por hacerse y el estado false o true es lo que usamos para definir si esta completa o incompleta, luego a la function agregarTarea le damos como parámetro esta nueva tarea con todos los datos nuevos obtenidos en este componente, nombre, estado e id.
            tarea.proyectoId = proyectoActual.id
            tarea.estado = false
            agregarTarea(tarea)

        } else {
            //actualizar tarea existente
            actualizarTarea(tarea)
        }

        
        //126. vamos a obtener las tareas y a filtrarlas del proyecto actual, para renderizar en las tareas del proyecto esta nueva tarea, si recordamos obtener tareas tiene todas las tareas de cada proyecto, y esta function toma proyectoId como parámetro para poder operar y comparar el id del proyecto con el id de la tarea, entonces para lograr hacer esta comparación ponemos proyectoActual.id como argumento y de esta forma mostrar en pantalla la nueva tarea correspondiente a el proyecto seleccionado. Recordemos que las tareas se agregan al state principal en el objeto tareas, en el paso 120.3 ya agregamos la nueva tarea a el state principal entonces ahora necesitamos que se vuelvan a filtrar las tareas y nos vuelva a mostrar el resultado de este filtro que compara el id de la tarea con el id del proyecto actual. 
        obtenerTareas(proyectoActual.id)


        //125. Reiniciamos el form, volvemos a el estado inicial de tarea para que el form se re inicie ya que el form llena este estado inicial con los datos que pone el usuario.
        guardarTarea({
            nombre : ''
        }) 
    }

    return ( 
        <div className='formulario'>
            <form
                /* 118 agregamos un onSubmit */ 
                onSubmit={onSubmit}
            >
                
                <div className='contenedor-input'>
                    <input 
                        type='text'
                        value={tarea.nombre}  
                        className='input-text'
                        placeholder='nombre Tarea'
                        name='nombre'
                        //119.2 agregamos un onChange para tomar los valores del formulario en un evento que escucha los cambios.
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input 
                        type="submit"
                        className='btn btn-primario btn-submit btn-block' 

                        //135 queremos que el value del submit cambie por ende el placeholder del boton cambia si es que una tarea esta para editarse o para agregarse
                        value={ tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {/* 124. agregamos en pantalla la alerta del error si errorTarea es true */}
            {errorTarea ? <p className='mensaje error'>El nombre de la atarea es Obligatorio</p>  : null }
        </div>
        
     );
}
 
export default FormTarea;