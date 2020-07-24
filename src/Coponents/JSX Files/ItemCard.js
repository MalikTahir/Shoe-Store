import React from 'react'
import './../CSS Files/ItemCard.css'
import { useStateValue } from './StateProvider'

function ItemCard({id,name,price,rating,image}) {
    const [{basket},dispatch] = useStateValue();

    const addToCart=()=>{
        dispatch({
            type:'Add_To_Basket',
            item:{
                id:id,
                name:name,
                price:price,
                rating:rating,
                image:image
            }
        })
    }
    return (
        <div className="itemCard">
            <div className="itemCard__info">
                <div className="itemCard__label">
                    <span>{name}</span>
                    <div className="itemCard__priceInfo">
                        <small>$</small>
                        <strong>{price}</strong>
                    </div>
                    <div className="itemCard__rating">
                        {Array(rating)
                        .fill()
                        .map((_)=>{return(<div>🌟</div>)})}
                    </div>
                </div>
            </div>
            <div className="itemCard__image">
                <img src="https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png" alt=""/>
            </div> 
            <button onClick={addToCart} className="itemCard__button">Add to Cart</button>
            
        </div>
    )
}

export default ItemCard

