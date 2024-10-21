import React from 'react'
import PropTypes from "prop-types";
import '../../public/css/historia.css'

function Historia({imageUrl, imageAlt, paragraphContainer}) {
  return (
    <main>
      <h1 className='h1'>Aprendiendo Ajedrez</h1>
      <section className="historia">
        <div>
          <img src={imageUrl} alt={imageAlt} />
          <h2>Historia</h2>
          <p>
           {paragraphContainer}
          </p>
        </div>
      </section>
    </main>
  )
}

Historia.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    paragraphContainer: PropTypes.string.isRequired,
  
}

export default Historia