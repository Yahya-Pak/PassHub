import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center py-3'>
        <div className='logo font-bold text-2xl ' >
            <span className='text-green-500'>&lt;</span>            
            Pass
            <span className='text-green-500'>Hub/&gt;</span>
            

        </div>
        <div className='flex justify-center items-center text-sm'>
            Created with <img className='w-6 mx-2 ' src="icons/heart.png" alt="" /> by Syed Yahya      
        </div>
    </div>
  )
}

export default Footer
