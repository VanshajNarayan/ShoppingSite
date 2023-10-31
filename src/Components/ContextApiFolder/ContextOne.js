import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { FirstReducerFx } from "../ReducerFolder/FirstReducerFx";


export const getData = createContext(null);
export const getDispatch = createContext(null);

export const Provider = ({ children }) => {

  const initialState = {
    loading: "false",
    allApiData: [],
    featureApiData : [],
  };

  const [state, dispatch] = useReducer(FirstReducerFx, initialState);

  const apiCalling = async () => {
    const { data } = await axios.get("https://api.pujakaitem.com/api/products");
    dispatch({ type: "load", payload: data });
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