"use client"
import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useAuthContext } from '../Provider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
function DashboardProvider({children}) {
  const{user}=useAuthContext()
  const router=useRouter()
  useEffect(()=>{
      user && Authenticated()
  },[user])
  
  const Authenticated=()=>{
    if(!user){
      router.replace('/')
    }
    
  }
  return (
    <SidebarProvider>
      <AppSidebar/>
      
    <div className='w-full'>
    <AppHeader/>
    <div className='p-10'>
      {children}
      </div>
    </div>
    </SidebarProvider>
  )
}

export default DashboardProvider
