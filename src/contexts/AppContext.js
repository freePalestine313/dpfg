import React, { useContext } from "react";

export const appContext = React.createContext({
  searchTerm: ""
});

// Provider to provide context
export const AppContextProvider = appContext.Provider;

// custom hook to get context value where we use values
export function useMyAppContext() {
    return useContext(appContext);
  }
