import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24 md:px-20 lh:px-36 xl:px-48'>
        <h2 className='font-bold text-6xl text-center '>Ai Youtube Short Generator</h2>
      
      <p className='mt-4 text-2xl text-center text-gray-500'>Ai generates scripts,images and voiceover in seconds create ,edit and publish engaging sghorts with ease!</p>
    
    <div className='mt-7 flex gap-8'>   
        <Authentication>
        <Button  className='bg-amber-50 text-black cursor-pointer' size="lg" variant="secondary"> Get Started</Button>
        </Authentication>
        <Button className='bg-gray-800' size='lg' variant="secondary" >Explore</Button>
    </div>
    </div>
  )
}

export default Hero
