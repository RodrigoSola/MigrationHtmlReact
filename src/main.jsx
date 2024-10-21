import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './componentes/layouts/Error.jsx';
import Piezas from '../src/componentes/Piezas.jsx';
import Movimientos from './componentes/Movimientos.jsx';
import FormContacto from './componentes/FormContacto.jsx';
import Jugadores from './componentes/Jugadores.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path:"/piezas",
    element: <Piezas />
  },
  {
    path: "/movimientos",
    element: <Movimientos />
  },
  {
    path:"/jugadores",
    element: <Jugadores />
  },
  {
    path:"/contacto",
    element: <FormContacto />
  }


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
