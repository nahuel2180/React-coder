import React from 'react'
import iconCart from '../../assets/cart.png'
import './NavBar.css'

const CartWidget = () => {


  return (
    <div className='buttonCart'>
        <p className='cartnum'>1<button><img src={iconCart} width={25}  /></button></p>
    </div>
  )
}

export default CartWidget
