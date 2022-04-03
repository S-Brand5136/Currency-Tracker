import React from "react";

export const AppContext = React.createContext<null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export default AppProvider;
