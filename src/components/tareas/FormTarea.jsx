import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

// 27. en este componente estará el formulario para agregar nuevas tareas al proyecto en especifico.
const FormTarea = () => {

    //100. importamos el context y le decimos que function vaa usar
    const proyectosContext = useContext(proyectoContext)

    //100.1 extraemos del context lo que queremos usar en el componente, queremos ocultar el formulario de tareas si proyectos es null. 
    const { proyecto } = proyectosContext

    //100.2 como estamos tratando de acceder a un proyecto en el siguiente paso usando el array destructuring, si no hay ningún proyecto va a saltar un error, para prevenir esto: 
    if(!proyecto) return null


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