import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className="flex justify-center items-center flex-col">
            <Image src="assest/writ.svg" alt='loading' width={400} height={400} />
        </div>
    </div>
  )
}

export default Loader