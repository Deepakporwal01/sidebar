import { useEffect, useState } from "react";

function App() {
  const [dark , setDark ] =useState(false)
 
 const handeler = () =>{
  if(!dark) {document.documentElement.classList.add("dark")
  setDark(pre=>!pre)}
      else{
        document.documentElement.classList.remove("dark")
        setDark(pre=>!pre)
      }
 }
   
  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen" >
      <div role="button" onClick={()=>{
        handeler()
      }} className="flex group p-20 bg-black dark:bg-red-500 ">
        <div className=" border-2 group-hover:text-red-500  scale-[.9] z-1 hover:bg-gray-100 hover:scale-[1.1] transition hover:translate-x-2 duration-100 bg-white hover:z-20 relative text-black left-5 rounded-lg shadow-sm hover:shadow-2xl  shadow-gray-50 p-20">card 1</div>
        <div className="border group-hover:text-blue-500 bg-white hover:scale-[1.1]  hover:bg-gray-100 hover:shadow-lg text-black rounded-lg z-10 scale-100   shadow-gray-300 p-20">card 2</div>
        <div className=" group-hover:text-green-500  border-2 scale-[.9] z-1 hover:bg-gray-100 hover:scale-[1.1] transition hover:-translate-x-2 duration-100 bg-white hover:z-20 relative text-black right-5 rounded-lg shadow-sm hover:shadow-2xl  shadow-gray-50 p-20">card 1</div>
       
      </div>
    </div>
  );
}

export default App;
