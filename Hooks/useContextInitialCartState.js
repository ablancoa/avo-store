import { useReducer } from "react";
import { shoppingReducer, initialState } from './useReduceCartProducts.js';
import useGetProducts from './useGetProducts.js';


const useInitialCartState = () => {
  const BASE_URL = 'http://localhost:3000/api/avo';
  const { data, loading, error } = useGetProducts(BASE_URL);
  
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  return (
    {
      state,
      dispatch,
      data,
      loading,
      error
    }
  )
}

export default useInitialCartState;