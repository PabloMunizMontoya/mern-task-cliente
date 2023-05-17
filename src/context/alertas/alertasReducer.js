//171 reducer de alertas 

//174 importamos los types
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types"


export default (state, action) => {
    switch(action.type) {

        case MOSTRAR_ALERTA:
            return{
                //el payload viene desde el state
                alerta: action.payload
            }

        case OCULTAR_ALERTA:
            return{
                alerta: null
            }
        default: 
            return state
    }
}