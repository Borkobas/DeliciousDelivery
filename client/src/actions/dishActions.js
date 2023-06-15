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
