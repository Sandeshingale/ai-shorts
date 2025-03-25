"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Gem, HomeIcon, LucideFileVideo, Search, WalletIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthContext } from '@/app/Provider'
function AppSidebar() {
  const MenuItems=[
    {
      title:'Home',
      url:'/dashboard',
      icon:HomeIcon
    },
    {
      title:'Create new video',
      url:'/create-new-video',
      icon:LucideFileVideo
    },
    {
      title:'Explore',
      url:'/explore',
      icon:Search
    },
    {
      title:'Billing',
      url:'/billing',
      icon:WalletIcon
    },
  ]
  const path=usePathname()
  const {user}=useAuthContext()
  return (
    
    <Sidebar>
      <SidebarHeader>
      <div>
        <div className='flex items-center gap-3 w-full justify-center mt-5'> 
        <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
        <h2 className='font-bold text-2xl'> Video Gen</h2>
        </div>
        <h2 className='text-lg text-gray-400 text-center mt-3'>AI video Generator</h2>
      </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupContent>
          <div className='mx-5 mt-10'>
            <Link href={'/create-new-video'}>
            <Button className='w-full'>+Create New Video</Button>
            </Link>
          </div>
          <SidebarMenu className='mt-4'>
            {MenuItems.map((menu,index)=>(
              <SidebarMenuItem className='mt-3 mx-5' key={index}>
                <SidebarMenuButton  isActive={path == menu.url} className='p-4'>
                  <Link href={menu?.url} className='flex  items-center gap-4 p-3'>
                  <menu.icon/>
                  <span>{menu?.title}</span>
                  </Link>
                </SidebarMenuButton>

              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className='p-5 border rounded-2xl mb-6 bg-gray-800 '> 
          <div className='flex items-center justify-between'>
            <Gem className='text-gray-400'/>
            <h2 className='text-gray-400'>{user?.credits} credits Left</h2>
          </div>
          <Button className='w-full mt-3'>Buy More Credits</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar




  
  