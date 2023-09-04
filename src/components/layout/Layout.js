import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Layout.scss'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout