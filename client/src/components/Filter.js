import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterDishes } from '../actions/dishActions';

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState('');
  const [category, setcategory] = useState('all');

  const handleFilter = () => {
    dispatch(filterDishes(searchkey, category));
  };

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
     
        <div className="col-md-3 w-100">
          <select
            className="form-control w-100 mt-2"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Ente">Ente</option>
            <option value="Veg">Veg</option>
          </select>
        </div>
        <div className="col-md-3 w-100">
          <button className="btn w-100 mt-2" onClick={handleFilter}>
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
