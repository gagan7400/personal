import React from 'react'
import '../index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector , useDispatch } from 'react-redux';
import { incNumber, decNumber ,iteminc ,itemdec } from './action/index';
export default function Main() {
    const mystate =  useSelector( (state)=> state.change);
    const mystate2 =  useSelector( (state)=> state.change2);
    const dispatch = useDispatch()
  return (
    <div>
       <div style={{textAlign:"center"}}>
       <h1> increment decrement  using react redux</h1>

    <button   onClick={()=> dispatch(decNumber())}> - </button>
       
         
         <h2>  {mystate }  </h2> 
          
         
         <button   onClick={()=> dispatch(incNumber())} > + </button> 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
       <br></br>
       <button   onClick={()=> dispatch(itemdec())} > - </button> 
       <h2> { mystate2}</h2>
       <button   onClick={()=> dispatch(iteminc())} > + </button> 
       </div> 
    </div>
  )
}
