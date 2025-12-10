import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="w-full flex flex-row justify-between items-center px-3 py-1 theme-hero shadow-lg sticky top-0 z-40 min-h-11">
      <img
        src={logo}
        onClick={() => navigate('/')} 
        alt="logo"
        className="w-20 md:w-28 cursor-pointer drop-shadow-lg hover:scale-105 transition-transform duration-200"
      />
      <button
        className="theme-cta text-white font-bold rounded-full px-3 py-1 shadow-lg hover:scale-105 transition-all duration-200 text-sm"
        style={{background: 'linear-gradient(90deg,var(--cta-from),var(--cta-to))'}}
      >
        Contact Us
      </button>
    </nav>
  )
}

export default Navbar