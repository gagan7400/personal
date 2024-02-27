import React  ,{useState}from 'react'
function Custom(){
      const [count , setCount] =useState(0);
      const handler =()=>{
        setCount(count +1)
      }
      return {
       count , handler
      }
}
export default Custom;