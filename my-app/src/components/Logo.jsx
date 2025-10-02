import React from 'react'
import logo from "../assets/logo.png"; // ✅ correct relative path



const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" className="w-auto h-16" />    
    </div>
  )
}

export default Logo
