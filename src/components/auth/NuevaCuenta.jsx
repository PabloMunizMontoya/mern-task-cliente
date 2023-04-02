import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const NuevaCuenta = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
        nombre: '',
        confirmar: ''
    })

    const { email, password, nombre, confirmar } = usuario

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sobra-dark'>
                <h1>Obtener Cuenta</h1>

                <form 
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id='nombre'
                            name='nombre'
                            placeholder='Nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            id='confirmar'
                            name='confirmar'
                            placeholder='Password'
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-front'>
                        <input type="submit" className='btn btn-primario btn-block' 
                        value='Registrar Usuario'/>
                    </div>
                </form>

                <Link to = {'/'} className='enlace-cuenta'>
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;