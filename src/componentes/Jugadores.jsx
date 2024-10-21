import React from 'react'
import Pages from './layouts/Pages'
import PropTypes from 'prop-types'
import CardJugadores from './CardJugadores'
import { jugadores } from './data/data'

function Jugadores() {

  return (
   <Pages>
    <CardJugadores jugadores={jugadores} />
   </Pages>
  )
}
Jugadores.propTypes = {
  jugadores: PropTypes.arrayOf(PropTypes.shape({
      imgJugador: PropTypes.string.isRequired,
      altJugador: PropTypes.string.isRequired,
      nombreJugador: PropTypes.string.isRequired,
      nacionalidadJugador: PropTypes.string.isRequired
  })).isRequired
  }
export default Jugadores