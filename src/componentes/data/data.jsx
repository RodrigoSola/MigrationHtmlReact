
export const piezasData = [
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
    
  ];

 export const dataMovimientos = [
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
  ];

   export const jugadores = [
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
  