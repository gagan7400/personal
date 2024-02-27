import React,{useState, useEffect ,useRef}from 'react'

export default function Hooks() {
    //counting
// let [count , setCount] = useState(0);
// const cl = useRef(0);
// console.log(cl)
//  add names
// let [object , setObject] = useState({
//     firstname:"d" , lastname:"s"
// });
// // add array elements
// let [array , setArray] = useState([]);

//   // increment count 5 
// let fun= ()=>{
   
//     setCount(count+=1)
  
// }
// useEffect(
//   ()=>{
//     console.log("l")
//     ++cl.current 
//   }
// )

// array functions
// const additem =()=>{
//     setArray([...array , {
//         id:array.length , value:Math.floor(Math.random()*10) + 1
//     }])
// }
  return (
    <div>
        {/* counting  
<h2> cl :{cl.current}</h2>
      <h1> count :: {count} &nbsp;&nbsp;<br></br>
       <button onClick={(count)=>{setCount(count=0)}}>Reset</button>&nbsp;&nbsp;&nbsp;
       <button onClick={()=>{setCount(count+=1)}}>Increment</button>&nbsp;&nbsp;&nbsp;
       <button onClick={()=>{ count==0?setCount(count=0):setCount(count-=1)}}>Decrement</button>
      
     </h1>
*/}


     {/* input name 
     <label> FirstName :</label>
     <input 
     type="text"   
      value={object.firstname}
      onChange={e=> setObject({ ...object ,firstname:e.target.value})}
     />
     <label> LastName :</label>
     <input 
     type="text" 
      value={object.lastname}
      onChange={e=> setObject({ ...object ,lastname:e.target.value})}
     
     />
     <h1> 
        your firstname is {object.firstname}  
     </h1>
     <h1> 
        your lastname is {object.lastname} <br></br>
        {JSON.stringify(object.lastname )} <br></br>
        {JSON.stringify(object.firstname )} 
     </h1>

 */}


     {/*  insert array values 
     <h1>array </h1>
     <button onClick={additem}> add items</button>
     <ul>{array.map(
        (array =>(<li> {array.value}</li>))
        )}
        
     </ul>*/}

     
    </ div>
  )
}
