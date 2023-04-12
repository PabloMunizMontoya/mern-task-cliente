import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

// 27. en este componente estará el formulario para agregar nuevas tareas al proyecto en especifico.
const FormTarea = () => {

    //100. importamos el context y le decimos que function vaa usar
    const proyectosContext = useContext(proyectoContext)

    //100.1 extraemos del context lo que queremos usar en el componente, queremos ocultar el formulario de tareas si proyectos es null. 
    const { proyecto } = proyectosContext

    //100.2 como estamos tratando de acceder a un proyecto en el siguiente paso usando el array destructuring, si no hay ningún proyecto va a saltar un error, para prevenir esto: entonces si no hay ningún proyecto el componente y su funcionalidad frena aca, que es lo que queríamos si proyecto es null no me muestres el form para agregar tareas.
    if(!proyecto) return null

    //100.3 proyecto es null en su estado inicial pero si le damos click a un proyecto se activa la function que llena ese proyecto con el proyecto clickeado, este proyecto es un array por lo que queremos obtener sus valores usando array destructuring. 
    const [proyectoActual] = proyecto

    return ( 
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='nombre Tarea...'
                        name='nombre'
                    />
                </div>
                <div className='contenedor-input'>
                    <input 
                        type="submit"
                        className='btn btn-primario btn-submit btn-block' 
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
        
     );
}
 
export default FormTarea;