import React, { useContext, useEffect, useState } from 'react'
import { BasicContext } from '../Context/Basic';
import {toast } from 'react-toastify';

function Cards() {
    const[menu,setmenu] = useState([]);
    const {params,setorder,cart,order,total,setcart}  = useContext(BasicContext);
   const notify = ()=>{toast('item is added') }

    const add_cart = (val)=>{
           setcart((prev)=>[...prev,val]);
                  notify();
    }
  

    useEffect(()=>{
        const fetchData = async()=>{
            try{
       let resp = await fetch(`https://free-food-menus-api-two.vercel.app/${params}`);
        let data = await resp.json();
        setmenu(data);
    }catch(err){
            console.log(err);
        }
        }

        fetchData();
    },[params])      

    return (
    <>



    <div className='bg-white width-[70%] shadow-xl rounded-2xl p-4 m-10 text-center'>
    <h3>Order here : {params} </h3>

    </div>

    <div className='grid grid-cols-3 gap-5  justify-self-center '>
       



      {
        menu.map((temp,index)=>{

          return(

        
    <div key={`${Date.now()}_@${index}`} className='w-[20rem] max-w-md bg-white rounded-3xl shadow-md overflow-hidden mt-4'>
        <div className='max-w-md mx-auto'>
          <div className='h-[12rem]' style={{backgroundImage:`url(${temp.img})`,backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
           </div>
          <div className='p-4 sm:p-6'>
            <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{temp.name}</p>
            <div className='flex flex-row justify-between'>
              
              <p className='text-[17px] font-bold text-[#0FB478] mt-[1rem]'>Price.{temp.price}Rs</p>
              <p className='text-[17px] font-bold text-[#0FB478] mt-[1rem]'>Veg</p>
            </div>
            


              <a  className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-pink-200 rounded-[14px] hover:bg-pink-300 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80
              cursor-pointer'
              onClick={()=>{
                add_cart(temp)
              }}
              >
                  Add to Cart
              </a>
           
          </div>
        </div>
    </div>
)
        })
      }


   

       
    </div>
        
    </>
  )
}

export default Cards