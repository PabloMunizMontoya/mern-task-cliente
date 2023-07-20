//usamos axios para hacer las peticiones al backend
import axios from "axios";


//creamos un cliente axios de forma que siempre que se llame al cliente este llama una url
const clienteAxios = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL
})

export default clienteAxios