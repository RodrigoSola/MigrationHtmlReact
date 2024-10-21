import React from 'react'
import '../../public/css/movimientos.css'
import CardMovimientos from './CardMovimientos'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Pages from './layouts/Pages'

function Movimientos() {
    
      const dataMovimientos = [
        {
          imgMovPieza: '../../public/img/mov-peon.gif',
          altMovPieza: 'movimiento de peon',
          titleMovPieza: 'Movimiento del Peón',
          parrafoMovPieza: 'El peón se mueve verticalmente por la columna en la que se encuentra, sin poder retroceder.  En el primer movimiento, desde el punto inicial, pueden avanzar dos escaques y, a partir de allí,  de uno en uno. Al llegar a la última fila se convierte en cualquier otra pieza, excluyendo el rey, movimiento llamado coronación o promoción;  el peón será reemplazado inmediatamente por otra pieza que puede ser caballo, alfil,  torre o dama y deberá ser retirado del tablero.',
          imgCapPieza: '../../public/img/como-come-el-peon.gif',
          altCapPieza: 'como come el peon',
          parrafoCapPieza: 'Aunque un peón se mueve hacia adelante, captura moviéndose una casilla diagonalmente hacia adelante. En el diagrama siguiente, las blancas pueden capturar tanto a la torre como al caballo.  Ella hace esto quitando la pieza capturada del tablero y reemplazándola con el peón.'

        },
        {
          imgMovPieza: '../../public/img/movimiento-alfil-ajedrez.gif',
          altMovPieza: 'movimiento de alfil',
          titleMovPieza: 'Movimiento del Alfil',
          parrafoMovPieza: '  Los alfiles se mueven en diagonal cualquier número de casillas, hacia delante o hacia atrás. El diagrama siguiente muestra todas las casillas posibles a las que se puede mover.  Cada lado tiene dos alfiles; un alfil mueve a lo largo de los cuadrados claros y el otro mueve  a lo largo de los cuadrados oscuros',
          imgCapPieza: '../../public/img/alfil-captura.gif',
          altCapPieza:'como come el alfil',
          parrafoCapPieza: 'Al igual que las piezas del mismo color bloquean el paso, si es del color del contrincante esta pieza podría ser capturada por el Alfil como se ve en el diagrama de la izquierda.'

        },
        {
          imgMovPieza:'../../public/img/movimiento-torre.gif',
          altMovPieza:'movimiento de torre',
          titleMovPieza:'Movimiento de la Torre',
          parrafoMovPieza:'La torre mueve horizontal y verticalmente cualquier número de casillas, hacia delante o hacia atrás. En el diagrama la torre puede moverse a cualquiera de las casillas resaltadas.',
          imgCapPieza:'../../public/img/captura-torre-ajedrez.gif',
          altCapPieza:'como come la torre',
          parrafoCapPieza:'Si una pieza enemiga está parada en una casilla a la que la torre puede mover, puede ser capturada. En el diagrama, las blancas pueden capturar al alfil con su torre. Ella hace esto quitando al Alfil del tablero y colocando la Torre en esa casilla en su lugar.',
        },
        {
          imgMovPieza:'../../public/img/movimientos-caballo-ajedrez.gif',
          altMovPieza:'movimiento de caballo',
          titleMovPieza:'Movimiento del Caballo',
          parrafoMovPieza:' El Caballo se mueve en forma de L en cualquier dirección. Podemos decir que mueve dos  cuadrados a un lado y luego un cuadrado hacia arriba o hacia abajo, o dos cuadrados  hacia arriba o hacia abajo, y luego un cuadrado hacia un lado. En el diagrama siguiente,puede mover a cualquiera de las casillas rojas.El caballo cambia el color de la casilla en la que se encuentra con cada movimiento. Por lo tanto, si comienza en un cuadrado de color claro, cuando haya terminado su movimiento aterrizará en un cuadrado de color oscuro.',
          imgCapPieza:'../../public/img/como-captura-caballo-ajedrez.gif',
          altCapPieza:'como come el caballo',
          parrafoCapPieza:'El Caballo es capaz de saltar sobre el peón en su camino y capturar al peón negro. Traza una especie de L',
        },
        {
          imgMovPieza:'../../public/img/movimientos-dama-ajedrez.gif',
          altMovPieza:'movimiento de dama',
          titleMovPieza:'Movimiento de la Dama',
          parrafoMovPieza:'La dama o también llamada Reina, se mueve en línea recta hacia adelante o hacia atrás y en diagonal cualquier número de cuadrados.  En el diagrama la Reina puede moverse a cualquiera de las casillas resaltadas.',
          imgCapPieza:'../../public/img/',
          altCapPieza:'Movimiento de la Dama',
          parrafoCapPieza:' Como figura en el diagrama en esta posicion la reina tiene la posibilidad de capturar tanto el alfilcomo la torre enemiga.',
        },
        {
          imgMovPieza:'../../public/img/como-se-mueve-el-rey.gif',
          altMovPieza:'movimiento de rey',
          titleMovPieza:'Movimiento del Rey',
          parrafoMovPieza:'El rey puede mover una casilla en cualquier dirección. En el diagrama el Rey puede moverse a una de las casillas resaltadas. Sin embargo, si existe una pieza enemiga obstruyendo el paso del movimiento del rey, este tiene prohibido ir hacia dicha casilla ya que en el proximo movimiento seria capturada perdiendo el juego.',
          imgCapPieza:'../../public/img/como-captura-rey.gif',
          altCapPieza:'como come el rey',
          parrafoCapPieza:'Si una pieza está en una casilla a la que el Rey puede mover, entonces el Rey puede capturar esa pieza. En el diagrama el Rey puede capturar la Torre.Pero si existiera una pieza enemiga defendiendo a la presa del rey, este tiene prohibido capturar ya que en el proximo movimiento seria capturada perdiendo el juego. Tambien los reyes del juego jamas pueden quedar uno a lado del otro.',
        }
      ]
  return (
    <>
     <Pages>
    <CardMovimientos cardMovimientos={dataMovimientos} />
    </Pages>
    </>
  )
}


export default Movimientos