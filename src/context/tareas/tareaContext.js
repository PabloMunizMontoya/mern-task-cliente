//107 se encarga de crear el context

//107.1 importamos el createContext de react
import {createContext} from 'react'

//107.2 le damos a una variable el nombre deseado y la equivalemos con la function importada anteriormente
const TareaContext = createContext()

//107.3 exportamos esta variable para poder usarla en el resto del tarea.
export default TareaContext