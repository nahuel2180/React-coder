import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.css'

const NavBar = () => {


  return (
    <nav className='navbar'>
        <h1>NG-Clothes</h1>

        <ul class="nav-items">
            <li><a href="#remeras">Remeras</a></li>
            <li><a href="#pantalones">Pantalones</a></li>
            <li><a href="#buzos">Buzos</a></li>
        </ul>

        <CartWidget />

    </nav>

  )
}

export default NavBar