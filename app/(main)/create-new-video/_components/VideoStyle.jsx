"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export const options=[
    {
        name:'Cinematic',
        image:'/cinematic.jpg'
    },
    {
        name:'Anime',
        image:'/anime.jpg'
    },
    {
        name:'Cyberpunk',
        image:'/cyberpunk.jpg'
    },
    {
        name:'Cartoon',
        image:'/cartoon.jpeg'
    },
    {
        name:'Realistic',
        image:'/realistic.png'
    },
    {
        name:'Cinematic',
        image:'/cinematic.jpg'
    },

]

function VideoStyle({onHandleInputChange}) {
  
  const[selectedStyle,setSelectedStyle]=useState()
    return (
    <div>
      <h2>Video Styles</h2>
      <p className='text-sm text-gray-400 mb-1'>Select video style</p>
        <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-col-5 gap-2'>
            {options?.map((option,index)=>(
                <div key={index} className='relative'
                onClick={()=>{setSelectedStyle(option.name)
                    onHandleInputChange('videoStyle',option.name)

                }}
                >
                    <Image
                    src={option.image}
                    alt={option.name}
                    width={500}
                    height={120}
                    className={`object-cover h-[70px] lg:h-[90px] xl:h-[180px] rounded-lg p-1 hover:border border-gray-300 cursor-pointer
                    ${option.name==selectedStyle && 'border'}`}
                    />
                    <h2 className='absolute bottom-1 text-center w-full'>{option.name}</h2>
                </div>
            ))}
        </div>
    
    </div>
  )
}

export default VideoStyle
