import { createContext, useContext, useEffect, useReducer } from "react";
import { FirstReducerFx } from "../ReducerFolder/FirstReducerFx";
import ApiData from "../ApiFolder/ApiData";


export const getData = createContext(null);
export const getDispatch = createContext(null);

function getLocalStorage() {
  const localCartData = JSON.parse(localStorage.getItem("vanscart"));
  if (localCartData.length ===  0) {
    return [];
  } else {
    return localCartData;
  };
};

export const Provider = ({ children }) => {

  const initialState = {
    loading: false,
    allApiData: [],
    featureApiData : [],
    cartBucket : getLocalStorage(),
    totalAmount : 0,
  };

  const [state, dispatch] = useReducer(FirstReducerFx, initialState);

  const apiCalling = async () => {
    dispatch({ type: "load", payload: ApiData });
    dispatch({ type: "featureDataLoad" });
  };

  useEffect(() => {
    apiCalling();
  }, [])

  useEffect(() => { 
    localStorage.setItem("vanscart", JSON.stringify(state.cartBucket));
    // eslint-disable-next-line
  }, [state.cartBucket]);

  return (
    <getData.Provider value={state}>
      <getDispatch.Provider value={dispatch} >
        {children}
      </getDispatch.Provider>
    </getData.Provider>
  )
};


// ! custom Hook:-

export function useGetData() {
  return useContext(getData);
};

export function useGetDispatch() {
  return useContext(getDispatch);
};