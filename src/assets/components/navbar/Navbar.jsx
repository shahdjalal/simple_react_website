import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {

  return (
    <>
   <nav className="navbar navbar-expand-lg  navbar-dark  position-sticky top-0npm">
  <div className="container">
    <a className={`navbar-brand ${style.logo}`} href="#">START BOOTSRAP</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto gap-4 list">
 
        <Link className={`nav-link ${style.link}`} aria-current="page" to={'/'}>PORTFILIO </Link>
        <Link className={`nav-link ${style.link}`} to={'/about'}>ABOUT</Link>
        <Link className={`nav-link ${style.link}`} to={'/contact'} >CONTACT</Link>
      </div>
    </div>
  </div>
</nav>

       
    
    </>
  )
}
