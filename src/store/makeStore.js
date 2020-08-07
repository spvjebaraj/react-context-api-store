import React, { createContext, useReducer, useContext } from "react";

export default function makeStore(reducer, initialState) {
  const DispatchContext = createContext();
  const StoreContext = createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
      <DispatchContext.Provider value={dispatch}>
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
      </DispatchContext.Provider>
    );
  };

  function useDispatch() {
    return useContext(DispatchContext);
  }

  function useStore() {
    return useContext(StoreContext);
  }

  return [StoreProvider, useStore, useDispatch];
}
