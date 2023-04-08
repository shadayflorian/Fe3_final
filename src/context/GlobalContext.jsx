import { createContext, useContext, useReducer, useState } from "react";

export const initialState = { theme: "light" };
const DentistState = [];

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState(DentistState);
  const [theme, dispatchTheme] = useReducer(themeReducer, initialState);

  const contextValue = {
    dentists,
    setDentists,
    theme,
    dispatchTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
export const useDentistContext = () => useContext(ThemeContext).dentists;
export const useSetDentistContext = () => useContext(ThemeContext).setDentists;
export const useThemeDispatch = () => useContext(ThemeContext).dispatchTheme;
