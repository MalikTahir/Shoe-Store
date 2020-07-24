export const initialState={
    basket:[],
};

export const getBasketTotal=(basket)=>{
    return(basket?.reduce((amount, item)=>item.price + amount,0))
}

function reducer(state,action){
    switch(action.type){
        case 'Add_To_Basket':
            // lodic for adding items
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'Remove_From_Basket':   
               let newBasket =[...state.basket];
               const index = state.basket.findIndex((basketItem)=>basketItem.id=== action.id);
               if(index>=0){
                   newBasket.splice(index,1)

               }
               return{...state, basket:newBasket};
        default:
            return state;    
    }
}
export default reducer;