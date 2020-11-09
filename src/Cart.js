import React, { useState } from 'react'
import Product from './Product'

function Cart(props) {
    const [dropDown, setDropDown] = useState(false)

    let renderProducts = []
    if(props.products.s > 0){
        renderProducts.push(<Product num={props.products.s} size="S"/>)
    }
    if(props.products.m > 0){
        renderProducts.push(<Product num={props.products.m} size="M"/>)
    }
    if(props.products.l > 0){
        renderProducts.push(<Product num={props.products.l} size="L"/>)
    }
    return (
        <div className="cart">
            <p 
                className={`cart-button ${dropDown ? "show" : ""}`}
                onClick={() => setDropDown(!dropDown)}
            >
                    {`My Cart(${props.products.s + props.products.m + props.products.l})`}
            </p>
            <div className={`cart-dropdown ${dropDown ? "show" : ""}`}>
                {renderProducts.length > 0 ? renderProducts : <p>NO ITEMS IN CART</p>}
            </div>
        </div>
    )
}

export default Cart