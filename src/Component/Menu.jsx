import React, { useContext } from 'react'
import {variety_Menu} from '../Categary/Variety'
import { BasicContext } from '../Context/Basic'

function Menu() {
  let {setparams} = useContext(BasicContext);
  
 const getFood_option = (val)=>{
    setparams(val);
 }

  return (
    <div>
        <div className='grid grid-cols-4 justify-center justify-self-center gap-6  rounded-b-md cursor-pointer'>
            {
              variety_Menu.map((val,index)=>{
                return <div onClick={()=> {getFood_option(val.name)}}  key={`${index}${Date.now()}`} className='bg-white w-[12rem]  gap-1 p-1 rounded-md shadow-xl flex flex-col items-center justify-center mt-5 hover:bg-pink-200 '
                >
                  {val.icon}
                  <label>{val.name}</label>

                </div>
              })
            } 

            </div>
    </div>
  )
}

export default Menu