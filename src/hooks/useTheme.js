import { useLayoutEffect, useState } from "react";


export const useTheme = () =>{
    const [theme, setTheme] = useState(localStorage.getItem("app-theme") || "light")
    // const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches
    // const defaultTheme = isDarkTheme ? "dark" : "light"

    useLayoutEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("app-theme", theme)
    }, [theme])

    return {theme, setTheme}
}