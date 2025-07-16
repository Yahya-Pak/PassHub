import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
        <div className='mycontainer flex justify-between items-center px-4 h-14 py-5'>
        <div className='logo font-bold text-2xl'>
            <Link to="/">
            <span className='text-green-500'>&lt;</span>            
            Pass
            <span className='text-green-500'>Hub/&gt;</span>
            
            </Link>
            

        </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href='#'>Home</a>
                <a className='hover:font-bold' href='#'>About</a>
                <a className='hover:font-bold' href='#'>Contact</a>
            </li>
        </ul> */}
        <div>
          <a className="flex gap-1 cursor-pointer text-white bg-green-600 py-1 px-3 rounded-full justify-center items-center ring ring-white"
          href='https://github.com/Yahya-Pak/PassHub' target='_blank'>
           <lord-icon className="invert"
              src="https://cdn.lordicon.com/ioihllwu.json"
              trigger="hover"   
              style={{ width: "35px", height: "35px" }}           
            ></lord-icon> 
            <span className="font-bold">Github</span>
            
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
