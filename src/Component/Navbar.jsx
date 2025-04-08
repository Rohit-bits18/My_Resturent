import React, { useContext } from 'react'
import { BasicContext } from '../Context/Basic'

function Navbar() {
  let {order,setshowcart} = useContext(BasicContext);

  return (
    <>
         <div className='flex justify-around p-[1rem] content-center'>
              <div className='flex justify-center items-center bg-white w-[3.2rem] h-[3rem] text-center rounded-md shadow-xl cursor-pointer hover:bg-pink-200'>
              <i className="fa-solid fa-bowl-food  text-pink-300 text-3xl"></i>
              </div>

              <div className='flex justify-center items-center h-[3rem] bg-white rounded-md p-1 gap-2 w-[70%] shadow-xl'>
              <i className="fa-solid fa-magnifying-glass text-2xl p-1 rounded-md text-pink-300 bg-white"></i>
             <input typeof='text' className='h-[100%] w-[100%] p-2 outline-0' placeholder='Find Wuat you Wanna to eat'></input>
              </div>

              <div  onClick={()=>{ setshowcart(true) }} className='flex justify-center items-center bg-white w-[3.2rem] h-[3rem] text-center rounded-md shadow-xl cursor-pointer hover:bg-pink-200'>
              <i className="fa-solid fa-cart-shopping  text-pink-300 text-3xl "></i>
              
             <sup className='text-2x1 text-pink-300 m-1'>{order.length}</sup>
              </div>


         </div>
    
    </>
  )
}

export default Navbar