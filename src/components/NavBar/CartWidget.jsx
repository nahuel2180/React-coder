import React from 'react'
import iconCart from '../../assets/cart.png'
import './NavBar.css'

export const CartWidget = () => {


  return (
    <div className='buttonCart'>
        <p className='cartnum'>1<button><img src={iconCart} width={25}  /></button></p>
    </div>
  )
}
