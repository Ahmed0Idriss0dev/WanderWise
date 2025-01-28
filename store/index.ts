import { create } from "zustand"
interface StoreType{
    isGenerate:boolean ,
    setisGenerate:(boo:boolean)=>void ,
    Response:string ,
    isResponse:(res:string)=> void
}
const myStore = create<StoreType>((set)=>({
    isGenerate:false ,
    setisGenerate:(aregement)=> set({isGenerate:aregement}) ,
    Response:"" ,
    isResponse:(res)=>set({Response:res})
}))
export default myStore