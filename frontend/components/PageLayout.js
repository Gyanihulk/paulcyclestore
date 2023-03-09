import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import PropTypes from "prop-types"


export function PageLayout ({children}) {
    

  return (
    <div>
    <Header />
    {children}
    <Footer/>
    </div>
  )
}

PageLayout.propTypes={
    children:PropTypes.any
}


  