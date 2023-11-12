// import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { SecondReduerFx } from "../ReducerFolder/SecondReducerFx";
import ApiData from "../ApiFolder/ApiData";


export const secondData = createContext();
export const secondDispatch = createContext();


export const SecondProvider = ({ children }) => {

  const initialState = {
    secondAllApiData: [],
  };

  const [state, dispatch] = useReducer(SecondReduerFx, initialState);

  const secondApi = async () => {
    // const { data } = await axios.get(ApiData);
    dispatch({ type: "loadSecondApi", payload: ApiData });
  };

  useEffect(() => {
    secondApi();
  }, []);

  return <secondData.Provider value={state} >
    <secondDispatch.Provider value={dispatch} >
      {children}
    </secondDispatch.Provider>
  </secondData.Provider>
};

export function useSecondData() {
  return useContext(secondData);
};

export function useSecondDispath() {
  return useContext(secondDispatch);
};