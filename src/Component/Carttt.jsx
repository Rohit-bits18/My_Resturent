import React, { useContext, useState } from 'react'
import { BasicContext } from '../Context/Basic'

function Carttt() {
    let{order,setorder} = useContext(BasicContext);

    const remove = (i)=>{
           let temp = order.filter((prev,index)=>{
             return index!=i;
           })
           setorder(temp);
    }

  return (
    <>

    {order.length>0? 
    order.map((temp,index)=>{
                return (
                    <div className={`w-[100%] bg-white flex justify-between rounded-b-md shadow-2xl p-2 mt-2 mb-2`}>
          
          <img src={temp.img} width='100rem' ></img>
      <div className={`m-1 p-1 `}>
            <h3 className={`font-bold`}>{temp.name}</h3>
        <div className={`mt-2`}>
            <button className={`text-pink-300 border-solid border-1 border-pink-300 font-bold  hover:text-white   hover:bg-pink-300   cursor-pointer w-[2rem] h-[2rem]`}>-</button>
            <button className={`text-pink-300 border-solid border-1 border-pink-300 font-bold  cursor-pointer w-[2rem] h-[3rem]`}>{1}</button>
            <button className={`text-pink-300 border-solid border-1 border-pink-300 font-bold   hover:text-white  hover:bg-pink-300  cursor-pointer w-[2rem] h-[2rem]`}>+</button>
        </div>
      </div>  

      <div className={`m-1 p-1 `}>
            <h3 className={`font-bold text-pink-300`}>Rs.{temp.price}/-</h3>
        <div className={`mt-2`}>
        <h3 className={`font-bold`} onClick={()=>{
              remove(index);
        }}><i class="fa-solid fa-trash text-pink-300 cursor-pointer hover:text-pink-400 hover:text-3xl"></i></h3>
        </div>
      </div>  
   </div> 
                )
             })
    :<h1>empty</h1>}
      
    </>
  )
}

export default Carttt