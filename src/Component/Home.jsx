import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Cards from './Cards'
import { BasicContext } from '../Context/Basic'
import Carttt from './Carttt'

function Home() {
  
  const {cart,total,showcart,setshowcart,order,setorder} = useContext(BasicContext)
  
  useEffect(()=>{
    setorder(cart);    
    console.log(order); 
  },[cart])

  return (
    <>
           <div className='bg-pink-100 h-[100%]'>
       
          <Navbar></Navbar>
          <Menu></Menu>
          <Cards></Cards>

             <div className={`h-[100vw] w-[40vw] bg-white fixed top-0 right-0 p-[3rem]  ${showcart?'translate-x-0':'translate-x-full'}`} >

            <div className={`flex justify-between`}>
              <h3 className={`text-2xl text-pink-300  font-bold`}>Ordered items :</h3>
              <h3 className={`text-2xl text-pink-300 font-bold cursor-pointer hover:text-pink-600`} onClick={()=>{
                setshowcart(false) 
              }}>X</h3>
            </div>
              { order.length>0?
                 <div>
                 <div className={`m-5`}>
                  
                  <Carttt></Carttt>
                    <hr></hr>
                    <div className={`flex justify-between p-5 mt-1 mb-1`}> 
                    <h3 className={`  `}>Sub-Total :</h3>
                    <h3 className={` text-pink-300  font-bold`}>{total}</h3>
                    </div>

                          <div className={`flex justify-between p-5 mt-1 mb-1`}> 
                       <h3 className={`  `}>GST :</h3>
                       <h3 className={` text-pink-300  font-bold`}>{total/10}</h3>
                       </div>
                       <hr></hr> 
                 
                          <div className={`flex justify-between p-5 mt-1 mb-1`}> 
                       <h3 className={`  font-bold`}>Total :</h3>
                       <h3 className={` text-pink-300  font-bold`}>{total/10+total}</h3>
                       </div>
                  </div>

                  <button className={`bg-pink-300 text-2xl cursor-pointer  w-[100%] p-2 rounded-xl hover:bg-pink-400`}>Place Order</button>
              </div>
              :
                <h3 className={`text-2xl text-pink-300 font-extrabold mt-[50%] text-center cursor-pointer hover:text-pink-400`}>Your Cart is Empty :</h3>
              }
              
        </div>
       </div>
    </>
  )
}

export default Home