import React from 'react';
import '../../public/css/piezas.css'
import PropTypes from 'prop-types';
import CardPiezas from './CardPiezas';
import Pages from './layouts/Pages';
import { piezasData } from './data/data';



function Piezas() {

 
  
  return (

<>
 <Pages>
  <CardPiezas cardPiezas={piezasData} />
     
  </Pages>
  </> 
  )
}
Piezas.propTypes = {
  cardPiezas: PropTypes.arrayOf(PropTypes.shape({
    imgPiezasUrl: PropTypes.string.isRequired,
  imgPiezasAlt: PropTypes.string.isRequired,
  piezasTitle: PropTypes.string.isRequired,
  piezasDescription: PropTypes.string.isRequired,
  })).isRequired,
  }
  ;
  

  
  export default Piezas;

