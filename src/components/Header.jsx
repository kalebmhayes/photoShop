import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import{Context} from '../Context'



export default function Header(props){
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"

    return(
        <header>
            <Link to='/'><h1>Pic Some</h1></Link>
            <Link to='/cart'><i className={cartClassName}></i></Link>
        </header>
    )
}