import React from 'react'
import './../CSS Files/Checkout.css'
import { useStateValue } from './StateProvider'
import SelectedItems from './SelectedItems';
import SubTotal from './SubTotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            {/* left part to show selected products */}
            <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="" className="checkout__ad"/>
                {basket?.length===0 ?(
                    <h1>You have no items in your Basket</h1>
                ):(
                    <div>
                    {basket.map(item=>{
                        return(
                            <SelectedItems id={item.id} name = {item.name} price={item.price} rating={item.rating} image={item.image}></SelectedItems>
                        )
                    })}
                    </div>
                    
                )
                }
            </div>
                {/* Right compartmnt to show subtotal */}
            <div className="checkout__right">
                {basket.length>=0 ?(
                    <SubTotal></SubTotal>)
                    :(<p></p>)
                }
                
            </div>
            
        </div>
    )
}

export default Checkout
