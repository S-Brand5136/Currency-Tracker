import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<null>(null);

const AppProvider = ({ children }: Props): React.ReactNode => {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export default AppProvider;
