import React from 'react'

import Navbar from './Navbar'
import Manager from './Manager'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      
  {/* Navbar */}
    <Navbar />

    
    {/* Main Content */}     
    <main className="flex-1">
        <div className="relative z-0 bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      <div className=" md:mycontainer min-h-[78.8vh]">
        { children }

        </div>
        </div>
      </main>

    {/* Footer */}

    <Footer />


    </div>
  )
}

export default Layout
