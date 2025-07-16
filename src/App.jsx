import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Card from './Components/Card/Card'
import MoreCard from './Components/Card/MoreCard'
import GeneraAbout from './Components/GeneraAbout/GeneraAbout'
import WeAreGenera from './Components/WeAreGenera/WeAreGenera'
import DepartamentMoreCard from './Components/DepartamentCard/DepartamentMoreCard'
import PartnerPost from './Components/PartnerPost/PartnerPost'
import GeneraConsulting from './Components/GeneraConsulting/GeneraConsulting'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <MoreCard />
      <GeneraAbout />
      <WeAreGenera />
      <DepartamentMoreCard />
      <PartnerPost />
      <GeneraConsulting />
      <Footer />
    </div>
  )
}

export default App
