import React from 'react'

// 27. en este componente estará el formulario para agregar nuevas tareas al proyecto en especifico.
const FormTarea = () => {
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