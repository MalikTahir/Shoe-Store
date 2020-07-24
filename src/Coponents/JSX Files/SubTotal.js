import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './reducer'
import './../CSS Files/SubTotal.css'
function SubTotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subTotal">
            {/* price */}
            <CurrencyFormat
                renderText={value=>{
                    return(
                    <div>
                        
                            Subtotal ({basket.length} items) :{value}
                        
                        </div>
                        )}}
                        
                decimalScale={2}
                value={0}
                 value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={"true"}
                prefix={"$"}
            ></CurrencyFormat>
            {/* Button to checkOut */}
            <button className="subTotal__button">Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
