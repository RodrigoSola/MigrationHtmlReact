import React from 'react'
import Pages from './layouts/Pages'
import PropTypes from 'prop-types'
import CardJugadores from './CardJugadores'

function Jugadores() {
const jugadores = [
  {
    imgJugador: '../public/img/jugador1.jpeg',
    altJugador:'Carlsen',
    nombreJugador: 'Magnus Carlsen',
    nacionalidadJugador: 'Noruego'

  },
  {
    imgJugador: '../public/img/jugador2.jpeg',
    altJugador: 'Fisher',
    nombreJugador: 'Bobby Fisher',
    nacionalidadJugador: 'EEUU'
  },
  {
    imgJugador: '../public/img/jugador3.jpeg',
    altJugador: 'Kasparov',
    nombreJugador: 'Gary Kasparov',
    nacionalidadJugador: 'Croata'
  },
  {
    imgJugador: '../public/img/jugador4.jpeg',
    altJugador: 'Capablanca',
    nombreJugador: 'Jose Capablanca',
    nacionalidadJugador: 'Cubano'
  },
  {
    imgJugador: '../public/img/jugador5.jpeg',
    altJugador: 'Karpov',
    nombreJugador: 'Anatoly Karpov',
    nacionalidadJugador: 'Ruso'
  },
  {
    imgJugador: '../public/img/jugador6.jpeg',
    altJugador: 'Tal',
    nombreJugador: 'Mikhail Tal',
    nacionalidadJugador: 'Ruso'
  },
  {
    imgJugador: '../public/img/jugador7.jpeg',
    altJugador: 'Lasker',
    nombreJugador: 'Emmanuel Lasker',
    nacionalidadJugador: 'Aleman'
  },
  {
    imgJugador: '../public/img/jugador8.jpeg',
    altJugador: 'Botvinik',
    nombreJugador: 'Mikhail Botvinik',
    nacionalidadJugador: 'Ruso'
  }
]

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