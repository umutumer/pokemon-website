import React from 'react'
import Logo from "../../images/pokemon-logo.png"
const Navbar = () => {
  return (
    <div className='flex justify-center w-full bg-orange-600 text-white p-2.5 items-center'>
      <div>
        <img className='w-20' src={Logo} alt="" />
      </div>
      <div>
        <h1 className='text-xl font-bold'>POKEMON</h1>
      </div>
    </div>
  )
}

export default Navbar
