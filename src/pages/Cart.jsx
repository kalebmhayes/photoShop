import React, {useContext, useState} from 'react'
import CartItem from '../components/CartItem'
import {Context} from '../Context'



export default function Cart(props){
const [buttonText, setButtonText] = useState('Place Order')
const {cartItems, clearCart} = useContext(Context)

const cartItemElements = cartItems.map(item => (
 <CartItem key={item.id} item={item}/>
))

const total = cartItems.length * 5.99

function placeOrder(){
    setButtonText('Ordering...')
    setTimeout(() => {
        setButtonText('Place Order')
        clearCart()
    }, 3000);
}


return (
    <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total:<span>{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span> </p>
        {cartItems.length > 0 ? <div className="order-button">
            <button onClick={placeOrder}>{buttonText}</button>
        </div> : <p>You have no items in your cart</p>}
    </main>
)

// CartItem.propTypes = {
//     item: PropTypes.shape({
//         url: PropTypes.string.isRequired
//     })
// }
}