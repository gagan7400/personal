// import React,{useState ,useCallback ,useRef ,useEffect} from 'react'
// import Todo from './Todo'
// export default function Todos() {
//     const [count ,setCount] =useState(0);
//     const [todos ,setTodos] =useState([]);
//     let na = useRef("products")
//     const [nam ,setnam] =useState(na.current);
//     const inc =()=>{
//         setCount(count+1)
//     }
//     // useEffect(() => {
//     //   setnam(na.current.value) 
//     // });
//     const addtodo = useCallback(()=>{
//         setTodos( (p)=>[...p ,`${nam}`])  
//     },[todos])
//   return (
//     <div>
//       <form action="" >
//   <input type="text" ref={na} name="name"/>
// </form>
//       <Todo todos={todos} addTodo={addtodo}/>
//       <hr />
//       <div>
//         count : {count}
//         <button onClick={inc}>+</button>
//       </div>
//     </div>
//   )
// }
