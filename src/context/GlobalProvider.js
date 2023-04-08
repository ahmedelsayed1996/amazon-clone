import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./AppReducer";
// last update``
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{  user: state.user, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
export const useAuth = () => {
  return useContext(GlobalContext);
};