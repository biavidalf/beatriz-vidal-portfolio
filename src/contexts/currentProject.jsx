import { createContext, useState, useContext } from "react";

export const CurrentProjectContext = createContext();

export function CurrentProjectContextProvider({ children }) {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <CurrentProjectContext.Provider
      value={{ currentProject, setCurrentProject }}
    >
      {children}
    </CurrentProjectContext.Provider>
  );
}

export function useCurrentProject() {
  const context = useContext(CurrentProjectContext);

  if (!context) {
    throw new Error(
      "useCurrentProject must be used within a CurrentProjectContextProvider.",
    );
  }

  const { currentProject, setCurrentProject } = context;
  return { currentProject, setCurrentProject };
}
