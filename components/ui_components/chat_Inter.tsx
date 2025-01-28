"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'
import myStore from '@/store'
import Image from 'next/image'
import run from '@/Geminy'
import { Loader2, Sparkles } from 'lucide-react'
const ChatInter = () => {
  const [Contry, SetContry] = useState<string>("")
  const [City, SetCity] = useState<string>("")
  const [isActive , setisactive] =useState<boolean>(false)
  const {setisGenerate , Response ,isResponse} = myStore()
  async function Generate(){
    setisactive(true)
    setisGenerate(true)
    const Message = await run(Contry , City) ;
    isResponse(Message)
    setisactive(false)

  }

  return (
    <div className="flex w-[50%] gap-3 justify-center items-center flex-col">
      <motion.div layout>
        <div className="text-center">
          <Image className='mx-auto ' src="/logo/logo.svg" alt='logo' width={100} height={100} />
            <h1 className='text-2xl'>WanderWise AI</h1>
            <p className='text-sm'>Tailored travel tips, landmarks, cuisine, and adventures everywhere!</p>
        </div>
    </motion.div>
    <div className='w-[60%] space-y-2 h-max'>
 
        <motion.div key={'CONTRY'} layout className="w-full h-12 bg-white rounded-md">
          <input type="text" value={Contry} onChange={(e) => SetContry(e.target.value)} maxLength={10} name="" className='w-full border outline-blue-600 rounded-md px-4  h-full ' id="" placeholder="contry" />
        </motion.div>
        {Contry && (
          <motion.div 
          layout

          initial={{ y: -10, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }} 
          key={0} className="w-full h-12 bg-white rounded-md">
            <input type="text" maxLength={10} value={City} name="" onChange={(e) => SetCity(e.target.value)} className='w-full border outline-blue-600 rounded-md px-4  h-full ' id="" placeholder="City" />
          </motion.div>
        )}
        {
          Contry && City && (
            <motion.div 
            layout
             initial={{ y: -10, opacity: 0 }}
             exit={{ y:  -10, opacity: 0 }}  
             animate={{ y: 0, opacity: 1 }}

             key={1} className="w-full flex justify-end items-center">
              <button disabled={isActive} onClick={()=>Generate()} className={`bg-blue-600 shadow-inner  text-white border  flex justify-center items-center gap-1 duration-150 h-11 ${isActive ?" animate-spin w-11 h-11 rounded-full bg-neutral-500 ":"w-[160px] rounded-md "}`}>
                 {isActive ? <Loader2/> :"Generate"}
                 </button>
            </motion.div>
          )
        }
      
    </div>
             </div>
  )
}

export default ChatInter