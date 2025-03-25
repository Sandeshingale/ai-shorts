import React from 'react'
import { options } from './VideoStyle'
import Image from 'next/image'

function Preview({formData}) {
  const selectVideoStyle=formData && options.find((item=>item?.name==formData?.videoStyle))
  
  return (
    <div>
      {selectVideoStyle?.image ? (
        <Image
          src={selectVideoStyle?.image}
          alt={selectVideoStyle?.name || "Video Style"}
          width={1000}
          height={300}
          unoptimized={selectVideoStyle?.image?.startsWith("http")}
        />
      ) : (
        <p className="text-gray-500">No preview available</p>
      )}
    </div>
  )
}

export default Preview
