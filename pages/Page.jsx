import React from 'react'
import Header from '../src/componentes/layouts/Header'
import Footer from '../src/componentes/layouts/Footer'

function Page(children) {
  return (
    <>
    <Header />
     {children}
    <Footer />
    </>
  )
}
Page.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Page