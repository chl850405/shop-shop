import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";
//
const StoreContext = createContext();
const { Provider } = StoreContext;

// instantiate our initial global state with the useProductReducer()
// value prop is good to have included, as it opens us up to pass in more data for state if we need to
//..props, is in place to handle any other props the user may need.
//<StoreProvider> component will wrap all of our other components, making them children of it
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: "",
  });
  // use this to confirm it works!
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };