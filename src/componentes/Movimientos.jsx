import React from 'react'
import '../../public/css/movimientos.css'
import CardMovimientos from './CardMovimientos'
import Pages from './layouts/Pages'
import { dataMovimientos } from './data/data'

function Movimientos() {
    
      
  return (
    <>
     <Pages>
    <CardMovimientos cardMovimientos={dataMovimientos} />
    </Pages>
    </>
  )
}


export default Movimientos