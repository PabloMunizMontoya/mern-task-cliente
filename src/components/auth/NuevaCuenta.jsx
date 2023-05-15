//175 refrescar data de como use alerta: importamos el context de alerta, luego le ponemos el valor a una variable, luego extraemos con array destructuring lo que queremos usar desde context, en este caso alerta es el estado inicial : null y mostrar alerta es lo que despacha la acción y ademas tiene los datos necesarios enviados por payload, después en el on submit hacemos una comprobación para verificar si los datos del formulario son correctos y si no lo son mandamos a llamar la function mostrarAlerta, esta function tiene como argumento lo que enviamos desde el payload el msg y la categoria, le damos valor aca a esos argumentos, en donde msg es el mensaje y la categoria hace referencia a un tipo de css en nuestra hoja de estilos.

import alertasContext from '../../context/alertas/alertasContext'
import React, { useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/autenticacion/authContext'

const NuevaCuenta = (props) => {

    const alertaContext = useContext(alertasContext)
    const {alerta, mostrarAlerta} = alertaContext

    //extraemos lo que necesitamos del authContext
    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, registrarUsuario} = authContext

    // en caso de que el usuario se halla autenticado o registrado o sea un registro duplicado
    useEffect(()=> {

        //aca lo que hacemos es que una vez que el usuario este autenticado lo llevamos a proyectos
        if(autenticado){
            props.history.push('/proyectos')
        }
        //si mensaje esta true mostramos una alerta con ese mensaje y la categoria que trae ese mensaje.
        if(mensaje){
            mostrarAlerta(mensaje.msg, 
                mensaje.categoria)
        }
    // en las dependencia ponemos lo que queremos que active el useEffect, en este caso cuando se agregue algo a mensaje( que cambia dependiendo de la respuesta al crear un usuario) el useEffect se activa. cuando autenticado pase a true.
    //como tenemos acceso al dom podemos disparar el useEffect cuando cambian las props
    },[mensaje, autenticado, props.history])
    //12 le damos al usuario los nuevos valores name del formulario usando un useState.
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
        nombre: '',
        confirmar: ''
    })

    //13. sacamos las propiedades de usuario usando un destructuring
    const { email, password, nombre, confirmar } = usuario

    
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        if(nombre.trim() === '' || password.trim() === '' ||  email.trim() === '' || confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
            return
        }

        if(password.length < 8) {
            mostrarAlerta('El password debe ser de al menos 8 caracteres', 'alerta-error')
            return
        }

        if(password !== confirmar) {
            mostrarAlerta('El password debe ser igual al password de confirmación', 'alerta-error')
            return
        }

        //una vez que pasamos toda la validación usamos la function registrar usuario, recordar que esta function envía datos al back end usando axios a traves de una petición post http.
        // a la function le pasamos todos los datos obtenidos en el form y guardados por el useState.
        //esto va a mandar a llamar a la function en authState, la misma tiene como datos los datos aca ingresados, esos datos se pasan hacia la api, obtiene una respuesta por el console.log(respuesta) y luego pasa con un dispatch a los types correspondientes.
        registrarUsuario({nombre,email,password})
    }

    return ( 
        <div className='form-usuario'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
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
                    {/* 10 le agregamos al formulario la casilla para poner el nombre del usuario */}
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
                    {/* 11 ponemos este campo para repetir el password y generar una confirmación */}
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