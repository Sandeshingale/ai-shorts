"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
//import classNames from 'classnames'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon, SparkleIcon } from 'lucide-react'
import axios from 'axios'
const suggestions=[
    "Historic",
    "Kids",
    "Movie",
    "AI Innovations",
    "Space Mysteries",
    "Horror",
    "Mythological Tales",
    "Tech BreakThroughs",
    "True Crime",
    "Fantasy Adventures",
    "Science Experiments",
    "Motivational Speakers",
]
function Topic({onHandleInputChange}) {
    const [selectedtopic,setSelectedTopic]=useState()
    const [scripts,setScripts]=useState()
    const [loading,setLoading]=useState(false)
    const[selectedScriptIndex,setSelectedScriptIndex]=useState()
    const GenerateScript=async()=>{
        setLoading(true)
        try{
            const result=await axios.post('/api/generate-script',{
                topic:selectedtopic
            })
                console.log(result.data)
                setScripts(result.data?.scripts)
        }
        catch(e){
            console.log(e)
        }
        setLoading(false)
    }
  return (
    <div>
      <h2 className='mb-1'>Project Title</h2>
      <Input placeholder='Enter Project Title' onChange={(event)=>onHandleInputChange('title',event?.target.value)}/>
        <div className='mt-5 '>
        <h2>Video Topic</h2>
        <p className='text-sm text-gray-600'> Select Topic</p>
        <Tabs defaultValue="suggestion" className="w-full mt-2">
  <TabsList>
    <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
    <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
  </TabsList>
  <TabsContent value="suggestion">
    <div>
        {suggestions.map((suggestion,index)=>(
       <Button variant="outline" key={index} className={`m-1 ${suggestion == selectedtopic && 'border'}`}
       onClick={() => {setSelectedTopic(suggestion)
        onHandleInputChange('topic',suggestion)
       }}>{suggestion}
          </Button>
        ))}
    </div>
  </TabsContent>
  <TabsContent value="your_topic">
    <div>
        <h2>Enter Your Own Topic</h2>
        <Textarea placeholder='Enter Your Topic'
        onChange={(event)=>{
            onHandleInputChange('topic',event.target.value)
        }}
        />

    </div>
  </TabsContent>
</Tabs>
        {
            scripts?.length>0 &&
            <div className='mt-3'>
                
                    
                        <h2>Select The Script</h2>
                <div className='grid grid-cols-2 gap-5'>
                    {scripts?.map((item,index)=>(
                        <div key={index} 
                        className={`p-3 border rounded-lg cursor-pointer ${selectedScriptIndex==index && 'border-white bg-secondary'}`}
                        onClick={()=>{setSelectedScriptIndex(index)
                            onHandleInputChange('script',item?.content)
                        }}
                        >
                            <h2 className='line-clamp-4 text-sm text-gray-300'>{item.content}</h2>
                        </div>
                    ))}
                </div>
            </div>
        }
        
        </div>
           {!scripts && <Button className='mt-3' size='sm' 
            disabled={loading}
            onClick={GenerateScript}>
            {loading?<Loader2Icon className='animate-spin'/>:
            <SparkleIcon/>} Generate Script</Button>}
    </div>
  )
}

export default Topic