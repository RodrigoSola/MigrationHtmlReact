import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types'
import '../../../public/css/footer.css'
import { directionsSvg, links } from '../data/data'

function Pages({children}) {
  
  return (
    <>
    <Header directions={directionsSvg} links={links} />
    {children}
    <Footer />
    </>
  )
}
Pages.propTypes = {
    children: PropTypes.element.isRequired,
    
  };
export default Pages