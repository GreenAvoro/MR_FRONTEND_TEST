import React from 'react'

import Image from './images/img.jpg'

function Product(props) {

    return (
        <div className="product-container">
            <div className="product">
                <img src={Image} />
                <div className="product-info">
                    <p>Classic Tee</p>
                    <p> {props.num}x $75.00</p>
                    <p>Size: {props.size}</p>
                </div>
            </div>
        </div>
    )
}

export default Product