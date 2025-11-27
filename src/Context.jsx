import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import cartItems from "./data";
import { useEffect } from "react";
import { reducer } from "./reducer/reducer";
import { useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let data = await fetch(
        "https://www.course-api.com/react-useReducer-cart-project",
        {
          method: "GET",
        }
      );

      let jsonData = await data.json();
      setArr(jsonData);
      console.log("jsonData", jsonData);
      dispatch({type:"SET",payload:[...jsonData]})
    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
