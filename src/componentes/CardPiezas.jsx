import React from 'react'
import PropTypes from 'prop-types';
import '../../public/css/piezas.css'

function CardPiezas({cardPiezas}) {
  return (
    <>
    <h1>Piezas</h1>
    <div className='card-container'>
     {cardPiezas.map((pieza, index) => (
       <div className="card-pieza" key={index}>
     <img src={pieza.imgPiezasUrl} alt={pieza.imgPiezasAlt} className='img' />
     <h2>{pieza.piezasTitle}</h2>
     <p>{pieza.piezasDescription}</p>
   </div> 
     ))}
    </div>
    
</>
  )
}
CardPiezas.propTypes = {
    cardPiezas: PropTypes.arrayOf(PropTypes.shape({
      imgPiezasUrl: PropTypes.string.isRequired,
    imgPiezasAlt: PropTypes.string.isRequired,
    piezasTitle: PropTypes.string.isRequired,
    piezasDescription: PropTypes.string.isRequired,
    })).isRequired,
    }
    ;
export default CardPiezas