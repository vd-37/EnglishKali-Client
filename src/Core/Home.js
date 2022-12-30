import React from 'react'
import About from './About'
import Footer from './Footer'
import HomeLayout from './HomeLayout'
import Menu from './Menu'

export const Home = () => {
  return (
    <div>
      <Menu />
      <HomeLayout />
      <About/>
      <Footer></Footer>
    </div>
  )
}
