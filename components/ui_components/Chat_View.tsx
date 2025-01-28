
import React, { useRef } from 'react'
import { motion } from 'motion/react'
import Markdown from 'react-markdown'
import myStore from '@/store'
import remarkGfm from 'remark-gfm'

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
const Chat_View = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: "a4"
  });
  // Default export is a4 paper, portrait, using millimeters for units
  async function Svae(){
    const ret = targetRef.current ;
    if(ret){

      const canvas = await html2canvas(ret ,{scale:12})
      const data = canvas.toDataURL("Image/jpg") ;
      const width = doc.internal.pageSize.getWidth();
      const higth =(canvas.height * width)
      doc.addImage(data ,"PNG",0,0 ,width , higth)
      doc.save('pdf.pdf')
      
    }

  }
  return (
    <motion.div 

    initial={{ x: 50, opacity: 0 }}
    exit={{ x:  -50, opacity: 0 }}  
    animate={{ x: 0, opacity: 1 }} layout className='w-[50%] border-l space-y-3 overflow-y-auto p-7 h-full bg-white'>
      <h1>Your Books</h1>
      <div ref={targetRef}   className="w-full flex justify-between items-center px-4  bg-blue-50 border-dashed border-2 rounded-lg border-blue-400  gap-3  h-[100px] ">
      <h1>Download Your pdf </h1>
       <button className='w-[100px] h-11 rounded-md border bg-white text-neutral-700  ' onClick={()=>Svae()}>Save</button>
      </div>
      <div ref={targetRef} className="w-full h-max p-6 rounded-md border">
        <div className="w-full h-[400px] bg-blue-300 rounded-md "></div>
        <Markdown  remarkPlugins={[remarkGfm]} >

        **Tailored** : /n
         travel tips, landmarks, cuisine, and adventures everywhere!

         **Tailored** : /n
         travel tips, landmarks, cuisine, and adventures everywhere!
        **Tailored** : /n
         travel tips, landmarks, cuisine, and adventures everywhere!
        **Tailored** : /n
         travel tips, landmarks, cuisine, and adventures everywhere!
        **Tailored** : /n
         travel tips, landmarks, cuisine, and adventures everywhere!
        </Markdown>
      </div>
    </motion.div>
  )
}

export default Chat_View