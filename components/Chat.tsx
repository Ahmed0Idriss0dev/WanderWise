"use client"
import React from 'react'
import ChatInter from './ui_components/chat_Inter'
import { AnimatePresence  } from 'motion/react'
import myStore from '@/store'
import Chat_View from './ui_components/Chat_View'

const Chat = () => {
  const {isGenerate} = myStore()
  return (
    <div className='w-full  bg-slate-50 flex flex-col justify-center items-center h-full '>
      <AnimatePresence>
      <div className="flex w-full h-full justify-center items-center">
      <ChatInter key={0}/>
       {isGenerate && <Chat_View/>}
      </div>
      
      </AnimatePresence>
    </div>
  )
}

export default Chat