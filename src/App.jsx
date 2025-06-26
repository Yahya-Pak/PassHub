import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  
  return (
    <>

  {/* Navbar */}
    <Navbar />

    
    {/* Main Content */}     
    <main className="flex-grow">
        <Manager />
      </main>

    {/* Footer */}

    <Footer />



    </>
  )
}

export default App
