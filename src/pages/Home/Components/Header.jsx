import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Header.css"

function Header() {
  return (
    <div className='header_content'>
      <NavLink to={"/"} className={({isActive})=>!isActive? "Link": "activeLink" }>Home</NavLink>
      <NavLink to={"/Create"} className={({isActive})=>!isActive? "Link": "activeLink" }>Create</NavLink>
    </div>
  )
}

export default Header
