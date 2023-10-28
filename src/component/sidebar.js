import React, { useState } from 'react'
import "./side.css"
export default function Sidebar() {
    const [menu , setMenu]= useState(false)
    const arr=["home" , "about" , "contacts","privacy","termsandcondition"]
  return (
   <>


   
   <div className={`h-screen w-52 fixed sidebar top-0 right-0 right-[${menu?"0px" : '-220px'}] flex flex-col bg-red-900 `}>
    <button className='text-left w-auto' onClick={()=>setMenu(pre=>!pre)}>close</button>
    {arr.map(e=>{
        return <div className='text-black text-bold uppercase text-center'>
            {e}
        </div>  
    })}
   
   </div>
    <button className='z-100' onClick={()=>{
        setMenu(pre=>!pre)
    }}>Menu</button>
   </>
  );
}
