// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React,{useState,useMemo} from 'react'

export default function Usememo() {
    let [count,setCount]=useState(0);
    let [items,setItems]=useState(10);
    const MulitCountmemo = useMemo(
       function multiCount(){
        let i=0;
         while(i<30000000)i++; 
       console.log("called") 
     return count*5 
      }  ,[count] )
  
  return (
    <>
      <div style={{textAlign:"center"}}>
      
        <h1>hello Usememo hook </h1>
        {/* <h2>  : {even()?"even":"odd" }</h2> */}
        <h2>  : {MulitCountmemo}</h2>
        <h2> Count :{count}</h2>
        <h2> items : {items}</h2>
        
        <button onClick={()=>{   setCount( count+1)    }  }>update count</button>
        <button onClick={()=>{setItems(items*10)}}>update Items</button>
      </div>
    </>
  )
}
