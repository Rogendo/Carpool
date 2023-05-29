import React from "react";
import { useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let name = "tim";
  return <AppContext.Provider value={name}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
