import React from 'react'
import Dish from '../components/Dish'
import dishes from '../dishesdata'
export default function Homescreen() {
return (
<div> 
    
    <div className="row">
{dishes.map(dish=>{
return <div className="col-md-4">
<div>
<Dish dish={dish}/>
</div>
</div>
})}
</div>
</div>
)
}