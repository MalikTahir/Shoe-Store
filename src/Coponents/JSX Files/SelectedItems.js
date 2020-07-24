import React from 'react'
import './../CSS Files/SelectedItem.css'
import { useStateValue } from './StateProvider'
function SelectedItems({id,name,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"Remove_From_Basket",
            id:id,
        })
    }
    return (
        <div className="selectedItem">
            <img src={image} alt="" className="selectedItem__image"/>

            <div className="selectedItem__itemInfo">
                <div className="selectedItem__name">
                    <span>{name}</span>
                </div>
                <div className="selectedItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="selectedItem__rating">
                    {
                    Array(rating).fill().map((_)=>{
                        return(
                            <p>🌟</p>
                        )
                    })}
                </div>
                <div className="selectedItem__removeButton">
                    <button onClick={removeFromBasket}>I'l buy later</button>
                </div>
            </div>
        </div>
        
    )
}

export default SelectedItems
