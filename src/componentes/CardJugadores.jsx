import React from 'react'
import '../../public/css/jugadores.css'


function CardJugadores({jugadores}) {
  return (
    <>
    <h1>Mejores jugadores</h1>
    <div className="jugadores">
    {jugadores.map((jugador, index) => (
        <div className="Jugador" key={index}>
          <img src= {jugador.imgJugador} alt= {jugador.altJugador} className="img-jugadores" />
          <h4> {jugador.nombreJugador} </h4>
          <p> {jugador.nacionalidadJugador} </p>
        </div>
        
    ))}
    </div>
        </>
  )
}




export default CardJugadores