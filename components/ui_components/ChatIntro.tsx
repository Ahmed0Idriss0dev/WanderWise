"use client"
import React from 'react'
import { motion } from 'motion/react'
const ChatIntro = () => {
  return (
    <motion.div layout>
        <div className="text-center">
            <h1 className='text-2xl'>WanderWise AI</h1>
            <p className='text-sm'>Tailored travel tips, landmarks, cuisine, and adventures everywhere!</p>
        </div>
    </motion.div>
  )
}

export default ChatIntro