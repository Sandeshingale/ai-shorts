"use client"
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useState } from 'react'
const voiceOptions=[
    {
        "value":"af_sarah",
        "name":"Sarah (Female)"
    },
    {
        
        "value":"af_sarah",
        "name":"Sarah (Female)"
    },
    {
        "value":"af_sky",
        "name":"Sky (Female)"
    },
    {
        "value":"am_adam",
        "name":"Adam (Male)"
    },
    {
        "value":"hf_alpha",
        "name":"Alpha(Male)"
    },
    {
        "value":"hm_omega",
        "name":"Omega (Male)"
    },
    {
        "value":"hm_psi",
        "name":"Psi (Male)"
    },
    {
        "value":"am_eric",
        "name":"Eirc (Male)"
    },
    {
        "value":"am_fenrir",
        "name":"Fenrir (Male)"
    },
  ]
  
function Voice({onHandleInputChange}) {
const[selectedVoice,setSelectedVoice]=useState()

    return (
    <div>
      <div className='mt-5'>
        <h2>Video Voice</h2>
        <p className='text-sm text-gray-400'>Select Voice For Your Video</p>
      <ScrollArea className='h-[70px] w-full'>
      <div className='grid grid-cols-2 gap-3'>
        {voiceOptions.map((voice,index)=>(
             
                <h2 className={`cursor-pointer p-3 dark:bg-slate-900 dark:border-white rounded-lg hover:border ${voice.name==selectedVoice && 'border'}`} 
                onClick={()=>{setSelectedVoice(voice.name)
                onHandleInputChange('voice',voice.value)}}
                key={index}>{voice.name}</h2>
            
        ))}
      </div>
      </ScrollArea>
      </div>
    </div>
  )
}

export default Voice
