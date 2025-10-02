import React from 'react'
import logo from "../assets/logo.png"; // ✅ correct relative path

import { Link } from 'react-router';

const Logo = () => {
  return (
    <div>
      <Link to='/'><img src={logo} alt="Logo" className="w-auto h-16" /></Link>
    </div>
  )
}

export default Logo
