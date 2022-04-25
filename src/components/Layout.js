import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <div className='content'>
          {props.children}
        </div>
       
    </div>
  )
}

export default Layout