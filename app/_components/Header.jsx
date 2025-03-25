"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '../Provider'
import Link from 'next/link'

export default function Header() {
    const {user}=useAuthContext();
  return (
    <div className='p-4 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Image
          src="/logo.svg"
          alt="Video Gen Logo"
          width={30}
          height={30}
        />
        <h2 className='text-2xl font-bold'>Video Gen</h2>
      </div>
      <div>
        {!user?
        <Authentication>
          <Button className='bg-amber-50 text-black hover:bg-amber-100 cursor-pointer'>
            Get Started
          </Button>
        </Authentication>
        :<div className='flex items-center gap-3'>
            <Link href={'/dashboard'}>
            <Button>Dashboard</Button>
            </Link>
            <Image src={user.photoURL} alt='userImage' width={48} height={40} className='rounded-full'/>
        </div>
}
</div>
    </div>
  )
}
