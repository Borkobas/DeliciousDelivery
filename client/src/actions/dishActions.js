import axios from "axios";

export const getAllDishes = () => async (dispatch) => {
  dispatch({ type: 'GET_DISHES_REQUEST' });

  try {
    const response = await axios.get('/getdishes');
    dispatch({ type: 'GET_DISHES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_DISHES_FAILED', payload: error });
  }
};

export const getDishById=(dishid)=>async dispatch=>{

  dispatch({type:'GET_DISHBYID_REQUEST'})

  try {
      const response = await axios.post('/api/dishes/getdishbyid' , {dishid})
      console.log(response);
      dispatch({type:'GET_DISHBYID_SUCCESS' , payload : response.data})
  } catch (error) {
      dispatch({type:'GET_DISHBYID_FAILED' , payload : error})
  }

}

export const filterDishes = (searchkey, category) => async (dispatch) => {
  dispatch({ type: 'GET_DISHES_REQUEST' });

  try {
    const response = await axios.get('/getdishes');
    let filteredDishes = response.data.filter((dish) =>
      dish.name.toLowerCase().includes(searchkey.toLowerCase())
    );

    if (category !== 'all') {
      filteredDishes = filteredDishes.filter(
        (dish) => dish.category.toLowerCase() === category.toLowerCase()
      );
    }

    dispatch({ type: 'GET_DISHES_SUCCESS', payload: filteredDishes });
  } catch (error) {
    dispatch({ type: 'GET_DISHES_FAILED', payload: error });
  }
};


export const addDish=(dish)=>async dispatch=>{
  dispatch({type:'ADD_DISH_REQUEST'})
  try {
      const response= await axios.post('/api/dishes/adddish' , {dish})
      console.log(response);
      dispatch({type:'ADD_DISH_SUCCESS'})
  } catch (error) {
      dispatch({type:'ADD_DISH_FAILED' , payload : error})
  }
}

export const editDish=(editeddish)=>async dispatch=>{
  dispatch({type:'EDIT_DISH_REQUEST'})
  try {
      const response= await axios.post('/api/dishes/editdish' , {editeddish})
      console.log(response);
      dispatch({type:'EDIT_DISH_SUCCESS'})
      window.location.href='/admin/dishslist'
  } catch (error) {
      dispatch({type:'EDIT_DISH_FAILED' , payload : error})
  }
}

export const deleteDish=(dishid)=>async dispatch=>{

try {
  const response =await axios.post('/api/dishes/deletedish' , {dishid})
  alert('Dish Deleted Successfully')
  console.log(response);
  window.location.reload()
} catch (error) {
  alert('Something went wrong')
  console.log(error);
}
     

}