import {  createContext, useEffect, useState } from "react";

export const BasicContext = createContext();

export const BasicContextProvider = ({children})=>{
const [params,setparams] = useState('drinks');
const [cart,setcart] = useState([]);
let [total,settotal] = useState(0);
const[showcart,setshowcart] = useState(false);
const[order,setorder] = useState([]);

useEffect(()=>{
      if(cart.length>0){
        let temp = 0;
        cart.forEach((val)=>{
            temp = temp + val.price;
        })


        settotal(temp);
      }
},[cart])

    return(
        <BasicContext.Provider value={{params,setparams,cart,setcart,total,showcart,setshowcart,order,setorder}}>
               {children}
        </BasicContext.Provider>
    )
}


//   const temp = {
//     country: "New York, NY",
// dsc: "Hong Kong Boba Tea Kit for 6",
// id: "hong-kong-boba-tea-kit-for-6",
// img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
// name: "New Territories",
// price: 59,
// rate: 4,
//   }