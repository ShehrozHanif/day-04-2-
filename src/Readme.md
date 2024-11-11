Here's a detailed and simple explanation of each file and how the components and context work together in your project. This project uses the Context API to manage a light and dark theme across components.

# 1. Context: theme.ts

The context file (theme.ts) is where you define the theme context. Context allows data to be shared across multiple components without passing props manually through each component level.

import { createContext, useContext } from "react";

// Create a theme context with default values
export const themeContext = createContext({
    themeMode: "light",     // Default theme mode is "light"
    darkTheme: () => {},    // Function placeholder for switching to dark theme
    lightTheme: () => {},   // Function placeholder for switching to light theme
});

// Export the ThemeProvider for providing context values to children
export const ThemeProvider = themeContext.Provider;

// Custom hook for easy access to the theme context
export default function useTheme() {
    return useContext(themeContext);
}

themeContext: This context holds the theme's mode (themeMode), and two functions (darkTheme and lightTheme) for switching themes.

ThemeProvider: Exports the themeContext.Provider, which allows you to provide the context values to child components.

useTheme: A custom hook that uses useContext(themeContext) to make it easy to access the theme context in other components.


# 2. Component: ThemeBtn.tsx

The ThemeBtn.tsx component provides a toggle button for switching between light and dark themes.

import React from 'react';
import useTheme from '../context/theme';

export default function ThemeBtn() {
    // Access theme mode and functions to switch themes
    const { themeMode, lightTheme, darkTheme } = useTheme();

    // Toggle theme based on checkbox status
    const onChangeBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="toggle-button"></div>
            <span className="ml-3 text-sm font-medium">Toggle Theme</span>
        </label>
    );
}

useTheme: Accesses the theme context values (themeMode, lightTheme, darkTheme).

onChangeBtn function: This toggles the theme based on the checkbox's status. If the checkbox is checked, it switches to dark mode; if unchecked, it switches to light mode.

UI: A styled checkbox button that shows the current theme (checked for dark, unchecked for light).


# 3. Component: Main.tsx

This component acts as a container for other components and manages the theme state. It wraps child components in the ThemeProvider to give them access to theme settings.

"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/context/theme";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";
import React from "react";

function Main() {
  const [themeMode, setThemeMode] = useState("light");

  // Define functions to switch between light and dark themes
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // Apply theme mode to the HTML root element
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="container">
        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default Main;

themeMode: A state that stores the current theme mode (light or dark).

lightTheme and darkTheme functions: Functions that update the themeMode state.

useEffect: Whenever themeMode changes, it updates the html tag with the current theme, applying CSS styles for either the light or dark theme.

ThemeProvider: Wraps ThemeBtn and Card, allowing them to access the theme context. The value passed to ThemeProvider includes the themeMode, lightTheme, and darkTheme functions.


# 4. Component: Card.tsx

This component displays content styled with CSS that supports dark and light themes.

import React from 'react';

export default function Card() {
    return (
        <div className="card">
            <a href="/">
                <img className="image" src="https://images.pexels.com/photo.jpg" alt="product_image" />
            </a>
            <div className="content">
                <a href="/">
                    <h5 className="title">Apple Watch Series 7 GPS</h5>
                </a>
                <div className="rating">
                    {/* SVG star icons for rating */}
                </div>
                <div className="price-and-cart">
                    <span className="price">$599</span>
                    <a href="/" className="add-to-cart">Add to cart</a>
                </div>
            </div>
        </div>
    );
}

Content: Displays an image, title, rating (with star icons), and price with an "Add to cart" button.

Styling: Uses Tailwind CSS classes that support both light and dark themes with conditional dark: classes.


# 5. Main Application File in app folder

The main application file renders the Main component and adds a title.

import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <h1 className="title">Theme Switcher</h1>
      <Main />
    </div>
  );
}

Main: Contains the ThemeBtn for switching themes and the Card component to display content in light or dark mode.


# Flow of Components and Context

## 1. Main Component (Theme Management):

Theme State Management: Sets the theme mode (themeMode) and updates the HTML root class for theme styles.

ThemeProvider: Provides the theme state (themeMode, lightTheme, darkTheme) to all child components.



## 2. ThemeBtn Component:

Context Usage: Accesses themeMode, lightTheme, and darkTheme functions from the theme context.

Theme Toggle: Uses a checkbox to toggle between light and dark modes, calling lightTheme or darkTheme based on the checkbox's status.



## 3. Card Component:

Themed Content Display: Styled content that reacts to the current theme, thanks to CSS classes that toggle with the dark mode.




Overall, the context makes theme data (like themeMode and functions to switch themes) available across the app. The theme changes dynamically without prop-drilling because each component can directly access and use the theme data from the context.

