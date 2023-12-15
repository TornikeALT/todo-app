import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme)
    }

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>)
}

export const useTheme = () => {
    return useContext(themeContext)
} 