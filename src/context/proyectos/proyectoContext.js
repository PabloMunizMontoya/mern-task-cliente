//33. se encarga de crear el context

//33.1 importamos el createContext de react
import {createContext} from 'react'

//33.2 le damos a una variable el nombre deseado y la equivalemos con la function importada anteriormente
const proyectoContext = createContext()

//33.3 exportamos esta variable para poder usarla en el resto del proyecto.
export default proyectoContext