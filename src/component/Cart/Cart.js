import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const product = cart[index];
        total = total + product.price;
        
    }
    
    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if (total > 15){
        shipping = 4.55;
    }
    else if(total > 0) {
        shipping = 11.99
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
        
    }
    
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Order:  {cart.length}</h4>
            <p>Product Price {formatNumber (total)}</p>
            <p>Tax + Vat {tax}</p>
            <p>Shipping {shipping}</p>
            <p>Total Price {grandTotal}</p>
            <p></p>
        </div>
    );
};

export default Cart;