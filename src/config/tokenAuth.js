//En este ejemplo, token es el valor del token de autorización que deseas incluir en las solicitudes. Al asignar el valor del token a axios.defaults.headers.common['Authorization'], se establecerá automáticamente en el encabezado "Authorization" de todas las solicitudes realizadas a través de Axios.

//Asegúrate de tener instalado Axios y de importarlo correctamente en tu archivo. Además, asegúrate de que token tenga el valor correcto antes de asignarlo al encabezado de autorización.

//Recuerda que establecer el token de autorización en la configuración global de Axios hará que se incluya en todas las solicitudes. Si solo necesitas agregar el token en algunas solicitudes específicas, puedes configurarlo directamente en la llamada a axios en lugar de usar la configuración global.

import clienteAxios from './axios';

const tokenAuth = token => {
  if (token) {
    // Si el token está presente, se establece en el encabezado de autorización
    clienteAxios.defaults.headers.common['Authorization'] = token;
    console.log(token)
  } else {
    // Si no hay token, se elimina el encabezado de autorización
    delete clienteAxios.defaults.headers.common['Authorization'];
  }
};

export default tokenAuth;