import React from "react";
import { useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const state = {
    user: null,
    rides: [],
    isLoggedIn: true,
  };
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
