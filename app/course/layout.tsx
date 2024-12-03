import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'


const Layout = ({ children }: { children: any}) => {
  return (
    <>
    <Header/>       
        {children}
    <Footer/>
    </>

  )
}

export default Layout