import React, { createContext, useContext } from "react";
import { useGlobalReducer } from "./reducer";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const GlobalProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useGlobalReducer({
    setModalExample: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
