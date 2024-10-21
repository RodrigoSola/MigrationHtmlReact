import React from 'react';
import '../../public/css/piezas.css'
import PropTypes from 'prop-types';
import CardPiezas from './CardPiezas';
import Pages from './layouts/Pages';



function Piezas() {

 
  const piezasData = [
    {
      imgPiezasUrl: "././public/img/tablero.jpg",
      imgPiezasAlt: "Tablero",
      piezasTitle: "Tablero",
      piezasDescription: "El tablero de ajedrez es un tablero rectangular de 8x8 casillas, cada una de las cuales está dividida en cuatro partes, llamadas casillas negras y blancas. Las casillas negras son las que se encuentran en la parte inferior del tablero, mientras que las casillas blancas son las que se encuentran  en la parte superior. El tablero de ajedrez tiene un diseño que se caracteriza por las diagonales que se extienden desde la esquina superior izquierda hasta la esquina inferior derecha y viceversa. Esto permite a las piezas comer y moverse en diagonal, lo que puede ser útil para evitar ataques y aumentar la posibilidad de captura."
    },
    {
      imgPiezasUrl: "../../public/img/alfil.png",
      imgPiezasAlt: "Alfil",
      piezasTitle: "Alfil",
      piezasDescription: " Inicialmente, el alfil no era parte de Chaturanga ni de su sucesor árabe Shatranj —juegos de tablero orientales de los que se originó el ajedrez— y fue incluido en el juego aproximadamente en el siglo XII, ya en Europa. Su predecesor, el al-fil tenía su nombre unido a la palabra Elefante y los historiadores indican que el  cambio de la pieza y, en algunos países, su denominación (por ejemplo, en inglés es bishop, y en portugués bispo) se debió a la influencia de la iglesia católica en la Edad Media y de la semejanza de la pieza abstracta árabe con la mitra  utilizada por los obispos de la época. Su posicion inicial en el tablero es en las columnas f y c, primera fila para blancas y octava para negras. Todas las piezas tienen un determinado valor, el del peon es de 3 puntos."
    },
    {
      imgPiezasUrl:'../../public/img/peon.png',
      imgPiezasAlt:"Peon",
      piezasTitle:"Peon",
      piezasDescription:"Originalmente, fueron la representación militar de la infantería, pero, en la Edad Media, fue interpretado en la moralidad como los  campesinos y la posibilidad de promoción, una metáfora de la posibilidad de movilidad social a través de un camino virtuoso (recto). Son tomados  como unidad de valor las piezas de ajedrez. Se vuelven más valiosos a medida que aumenta la posibilidad de promoción, lo que puede influir en la estrategi adoptada por los jugadores. Su posicion inicial en el tablero es delante de las piezas 'mayores', como son  la torre, caballo, alfil, rey y reina. Todas las piezas tienen un determinado valor, el del peon es de 1 punto.",
    },
    {
      imgPiezasUrl:'../../public/img/caballo.webp',
      imgPiezasAlt:"Caballo",
      piezasTitle:"Caballo",
      piezasDescription:"Una de las leyendas que acompañan a la creación del juego cuenta que el Brahmán Sissa creó el chaturanga, precursor más antiguo del ajedrez, a petición del Rajá indio  Balhait. Sissa se basó en las figuras del Ejército de la India, e incluyó el caballo como forma representativa de la caballería y del papel que desempeñaba en los  ejércitos durante la guerra.De acuerdo con relatos griegos, esta era la composición del ejército de la India desde el siglo IV a. C. La palabra Chaturanga, que nombró  a la primera versión del juego, tiene el significado que se atribuye a las partes  del ejército en el Ramáiana y en el Mahabharata en el cual el ejército está  expresamente llamado hasty-ashwa-ratha-padatam del cual ashwanota es la palabra  en sánscrito para el animal caballo. Su posicion en el tablero es en las filas g y b, primera fila para blancas y octava para negras.Todas las piezas tienen un determinado valor, el del peon es de 3 puntos."
    },
    {
      imgPiezasUrl:'../../public/img/reina.webp',
      imgPiezasAlt:"Reina",
      piezasTitle:"Reina",
      piezasDescription:"En el chaturanga y shatranj, antecesores más antiguos de ajedrez, el lugar de la dama era ocupado por la firzan o firz, equivalente al visir o consejero real. En Europa,  durante la Edad Media, la dama sustituyó poco a poco su antecesor, a pesar de que los  movimientos sean los mismos, y ya en el final del siglo XIII estuvo presente en todo el  continente. A finales del siglo XV, su movimiento se expandió alcanzando vigente hasta  el siglo XXI, aunque todavía se restringían las condiciones de promoción de un peón a  una nueva dama.Su posicion inicial en el tablero es en la columna d, primera fila para las blancas y octava para las negras.Representada en los países de habla hispana y portuguesa por la letra D en la notación algebraica. Es la pieza de mayor valor absoluto del juego, valorada con nueve puntos."
    },
    {
      imgPiezasUrl: '../../public/img/torre.webp',
      imgPiezasAlt:"Torre",
      piezasTitle:"Torre",
      piezasDescription: "La torre (♖ ♜), antiguamente llamada «roque>> es una pieza mayor de ajedrez, empleada  generalmente en la fase final del juego debido a su valor estratégico y táctico, que ha sido  ampliamente estudiada en la literatura ajedrecística. La pieza está presente en la mayoría de las variantes del ajedrez, normalmente en la misma  posición inicial del ajedrez occidental, aunque existan diferencias regionales en relación con  el nombre.Su posicion en el tablero es en las columnas a y h, primera fila para blancas y octava para negras. Todas las piezas tienen un determinado valor, el del peon es de 5 puntos."
    },
    {
      imgPiezasUrl:"../../public/img/rey.webp",
      imgPiezasAlt:"Rey",
      piezasTitle:"Rey",
      piezasDescription: " El rey (♔♚) es la pieza más importante del ajedrez, darle jaque mate es el objetivo principal del juego.  Durante una partida, el rey no puede permanecer bajo la amenaza de piezas enemigas en  ningún instante, debe ser colocado de forma segura en el movimiento inmediatamente  posterior, en caso de ser atacado. Las reglas de etiqueta en el ajedrez indican que al  amenazar al rey del oponente, el atacante puede romper el silencio de la partida y  anunciar «¡jaque!» y, en el caso de que el rey no pudiera escapar a la captura, anunciar  «¡jaque mate!». Estos gestos se consideran opcionales según el reglamento del juego."
    }
    
  ]
  ;
  
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

