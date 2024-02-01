import React,{createContext, useState} from 'react'

export const Themecontext=createContext()


export const Themeprovider=({children})=>{
const [theme,setTheme]=useState(true)

    const toggleTheme=()=>{
        setTheme(!theme)
    }
    
    
    return(
        
        <Themecontext.Provider value={{theme,toggleTheme}}>
    {children}
</Themecontext.Provider>
    )
}

