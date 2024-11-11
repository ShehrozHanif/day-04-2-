// "use client"

// import { useState, useEffect } from "react"
// import { themeProvider } from "@/context/theme"
// import ThemeBtn from "./ThemeBtn"
// import Card from "./Card"

// import React from 'react'

// function Main() {
//     const [themeMode ,setThemeMode] = useState("light")

//     const lightTheme =() =>{
//         setThemeMode("light")
//     }

//     const darkTheme =()=>{
//         setThemeMode("dark")
//     }
     

//     // actual change to theme // 
//     useEffect(()=>{
//         document.querySelector('html')?.classList.remove("light,dark")
//         document.querySelector('html')?.classList.add(themeMode)
//     },[themeMode])


//   return (
//     <themeProvider value={{themeMode,lightTheme,darkTheme}}>
//      <div className="flex flex-wrap min-h-screen items-center">
//        <div className="w-full">
//          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//            <ThemeBtn/>
//          </div>

//          <div className="w-full max-w-sm mx-auto">
//            <Card/>
//          </div>
//        </div>
//      </div>
//     </themeProvider>
//   )
// }

// export default Main


// "use client"

// import { useState, useEffect } from "react";
// import ThemeContext from "@/context/theme"; // Import the correct context
// import ThemeBtn from "./ThemeBtn";
// import Card from "./Card";
// import React from 'react';

// function Main() {
//   const [themeMode, setThemeMode] = useState("light");

//   const lightTheme = () => {
//     setThemeMode("light");
//   };

//   const darkTheme = () => {
//     setThemeMode("dark");
//   };

//   // Actual change to theme
//   useEffect(() => {
//     document.querySelector('html')?.classList.remove("light", "dark");
//     document.querySelector('html')?.classList.add(themeMode);
//   }, [themeMode]);

//   return (
//     <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>
//         </div>
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default Main;


// "use client";

// import { useState, useEffect } from "react";
// import { themeProvider } from "@/context/theme"; // Import the correct provider
// import ThemeBtn from "./ThemeBtn";
// import Card from "./Card";
// import React from "react";

// function Main() {
//   const [themeMode, setThemeMode] = useState("light");

//   const lightTheme = () => {
//     setThemeMode("light");
//   };

//   const darkTheme = () => {
//     setThemeMode("dark");
//   };

//   // Apply theme change to HTML root
//   useEffect(() => {
//     document.querySelector("html")?.classList.remove("light", "dark");
//     document.querySelector("html")?.classList.add(themeMode);
//   }, [themeMode]);

//   return (
//     <themeProvider value={{ themeMode, lightTheme, darkTheme }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>
//         </div>
//       </div>
//     </themeProvider>
//   );
// }

// export default Main;


"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/context/theme"; // Import the correctly named ThemeProvider
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";
import React from "react";

function Main() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Apply theme change to HTML root
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Main;
