export const addToCart=(dish , quantity , varient)=>dispatch=>{

    var cartItem = {
    name : dish.name,
    _id : dish._id,
    image : dish.image,
    varient : varient,
    quantity : quantity,
    prices : dish.prices,
    price : dish.prices[0][varient]* quantity


    }


    dispatch({type: 'ADD _TO_CART' , payload : cartItem})

}