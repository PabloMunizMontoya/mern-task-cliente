import React from 'react'

const FormTarea = () => {
    return ( 
        <div className='formulario'>
            <form>
                <div lassName='contenedor-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='nombre Tarea...'
                        name='nombre'
                    />
                </div>
                <div lassName='contenedor-input'>
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