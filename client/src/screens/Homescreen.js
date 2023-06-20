import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDishes } from '../actions/dishActions';
import Filter from "../components/Filter";
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
       <Filter/>
      <div className="row justify-content-center">
        {loading ? (
          <h1 className="loading-text">Laden</h1>
        ) : error ? (
          <h1 className="error-text">Etwas ist schief gelaufen</h1>
        ) : (
          dishes.map((dish) => (
            <div className="col-md-3 m-3" key={dish._id}>
              <div className="dish-container">
                <Dish dish={dish}/>
              </div>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
}
