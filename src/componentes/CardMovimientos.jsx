import React from 'react'
import PropTypes from 'prop-types'
import '../../public/css/movimientos.css'

function CardMovimientos({cardMovimientos}) {
  return (
    <>
    <h1>Movimientos</h1>
    <div className="card-movimientos">
    {cardMovimientos.map((movimiento, index) => (
           <div className="mov-peon" key={index}>
    <img src={movimiento.imgMovPieza} alt={movimiento.altMovPieza} className="img-mov-peon"></img>
    <span className="titulo-mov-peon"> {movimiento.titleMovPieza} </span>
    <p className="parrafo-mov-peon">
        {movimiento.parrafoMovPieza}
    </p>
    <img src= {movimiento.imgCapPieza} alt= {movimiento.altCapPieza} className="img-cap-peon"></img>
    <span className="titulo-cap-peon">¿Como captura?</span>
    <p className="parrafo-cap-peon">
        {movimiento.parrafoCapPieza}
    </p>
</div>
    ))}
 
</div>
</>
  )
}

CardMovimientos.propTypes = {
  cardMovimientos: PropTypes.arrayOf(PropTypes.shape({
    imgMovPieza: PropTypes.string.isRequired,
    altMovPieza: PropTypes.string.isRequired,
    titleMovPieza: PropTypes.string.isRequired,
    parrafoMovPieza: PropTypes.string.isRequired,
    imgCapPieza: PropTypes.string.isRequired,
    altCapPieza: PropTypes.string.isRequired,
    parrafoCapPieza: PropTypes.string.isRequired,
    })).isRequired,
};
export default CardMovimientos