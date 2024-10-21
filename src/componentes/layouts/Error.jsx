import {useRouteError} from 'react-router-dom'

function Error() {

    const error = useRouteError();
  return (
    <div>
        <h1>Pagina no encontrada</h1>
        <p>Lo sentimos mucho un error ha ocurrido</p>
        <p> {error.statusText || error.message} </p>
        <p>{error.status ? ` Error tipo:  ${error.status} ` : ""} </p>
    </div>
  )
}

export default Error