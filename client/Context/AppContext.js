import { useContext, createContext, useReducer } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const initialState = {
    name: "name",
    email: "email",
    user: { name: "tim", email: "tim@gmail.com" },
  };
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const name = "Hello tim";
  return (
    <AppContext.Provider value={{ ...initialState }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
