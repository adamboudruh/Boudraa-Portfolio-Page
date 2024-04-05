import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useState, useRef } from 'react'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div className='spacer'></div>
      <Footer />
    </>
  )
}

export default App
