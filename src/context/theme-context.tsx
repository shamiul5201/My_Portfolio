"use client"

import React, { useEffect, useState, createContext, useContext } from 'react'

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");   // set to app's hook
            window.localStorage.setItem("theme", "dark");   // set to localStorage
            document.documentElement.classList.add("dark"); // add the dark class to DOM; required for tailwind's dark theme class
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark"); // remove the dark class to DOM
        }
    }

    // When the app requires to synchronize with an external system
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        // If not null, set theme to the app's setTheme state; Take dominant if user set the theme preference through explicitly setting the button; otherwise check the use's default theme pref from his OS.
        if (localTheme) {
            setTheme(localTheme)

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }

    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}
