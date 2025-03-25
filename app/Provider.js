"use client"
import { auth } from '@/configs/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { ThemeProvider as NextThemeProvider} from 'next-themes'
import React, { useContext, useEffect,useState } from 'react'
import { AuthContext } from './context/AuthContext'
import {useMutation} from 'convex/react'
import { api } from '@/convex/_generated/api'
function Provider({children}) {

    const [user,setUser]=useState(null)
    const CreateUser=useMutation(api.users.CreateNewUser)
    useEffect (()=>{
        const unsubscribe =onAuthStateChanged(auth,async(user)=>{
            
            
            const result = await CreateUser({
                name:user?.displayName,
                email:user?.email,
                photoURL:user?.photoURL
            })
            console.log(result)
            setUser(result)

        })
        return ()=> unsubscribe()
    },[])
    return (
    <div>
        
        <AuthContext.Provider value={{user}}>
        <NextThemeProvider
        attribute="class"
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
        >
      {children}
      </NextThemeProvider>
      </AuthContext.Provider>
      
    </div>
  )
}
export const useAuthContext=()=>{
    const context=useContext(AuthContext)
    return context;
}

export default Provider
