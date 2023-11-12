import { createContext, useContext, useEffect, useReducer } from "react";
import { FirstReducerFx } from "../ReducerFolder/FirstReducerFx";
import ApiData from "../ApiFolder/ApiData";


export const getData = createContext(null);
export const getDispatch = createContext(null);

export const Provider = ({ children }) => {

  const initialState = {
    loading: "false",
    allApiData: [],
    featureApiData : [],
    cartBucket : [],
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