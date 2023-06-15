<<<<<<< HEAD
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
=======
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDishes } from '../actions/dishActions';

import Dish from '../components/Dish';

export default function Homescreen() {
  const dispatch = useDispatch();
  const dishesState = useSelector(state => state.getAllDishesReducer);
  const { dishes, error, loading } = dishesState;

  useEffect(() => {
    dispatch(getAllDishes());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          dishes.map((dish) => (
            <div className="col-md-3 m-3" key={dish._id}>
              <div>
                <Dish dish={dish}/>
              </div>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
}
>>>>>>> merge_zadnjica
