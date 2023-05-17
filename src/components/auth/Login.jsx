import React, { useState, useContext } from 'react'
import AuthContext from '../../context/autenticacion/authContext'
import alertasContext from '../../context/alertas/alertasContext'

//9 importamos esta propiedad desde react router dom para hacer funcionales los enlaces.
import {Link} from 'react-router-dom'

const Login = () => {

    const alertaContext = useContext(alertasContext)
    const {alerta, mostrarAlerta} = alertaContext

    //extraemos lo que necesitamos del authContext
    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, registrarUsuario, iniciarSesion} = authContext

    // 7 definimos el state para tomar los datos del usuario, el estate tiene como datos iniciales un objeto con propiedades y su valor vació.
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })


    //7.1 extraemos del usuario sus valores con destructuring
    const { email, password } = usuario

    //4.2 corremos la function onChange que toma los valores que el usuario pone dentro del formulario. para no modificar los valores originales primero se crea una copia con spread operator, y luego se le asigna a esa copia el valor de los datos tomados en el evento.  
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //8.1 function que se dispara al usuario apretar el submit, se pone un preventDefault para que la pagina no se recargue al hacer click en el boton. 
    const onSubmit = e => {
        e.preventDefault()

        // validamos que no halla campos vacíos
        if(email.trim() === '' || password.trim() === '' ){
            //aca llamamos a la function y le damos los valores que vienen desde el payload msg y categoria.
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }
        // al pasar la validaciones, mandamos a llamar a iniciarSesion que viene desde el context de auth, si recordamos esta function tiene como props los datos, aca se los pasaremos, estos datos pasaran a la api 
        iniciarSesion({email, password})
    }

    return ( 
        <div className='form-usuario'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
            <div className='contenedor-form sobra-dark'>
                <h1>Iniciar Sesión</h1>

                <form 
                    /* 8 ponemos el onSubmit que escucha cuando el usuario hace click en el boton */
                    onSubmit={onSubmit}
                >
                    {/* 4. ingresamos la parte del form donde el usuario pone su e mail */}
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={email}
                            /* 4.1 creamos un onChange que hace que se ejecute una function cada que halla un cambio */
                            onChange={onChange}
                        />
                    </div>

                    {/* 5 ingresamos la parte del formulario donde el usuario pone su password */}
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    {/* 6 agregamos un boton para el submit del form */}
                    <div className='campo-front'>
                        <input type="submit" className='btn btn-primario btn-block' 
                        value='Iniciar Sesión'/>
                    </div>
                </form>

                {/* 9.1 agregamos Link y le especificamos la ruta, esta parte es por si el usuario no tiene cuenta en la pagina aparece un link para crear una nueva cuenta */}
                <Link to = {'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;