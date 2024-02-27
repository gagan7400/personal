import React ,{useCallback ,useState} from 'react'
import Todo from './Todo'
export default function Usecallback() {
    const [count ,setCount] =useState(0);
    const [todo ,setTodos] =useState([]);

  const increm =()=>{setCount(count+1)}

 const addtodo = useCallback( ()=>{
        setTodos((prev) => [...prev , `new Entry`])
    },[todo]);

  return (
    <>
        <Todo todos={todo} addTodo={addtodo}/>
        <hr/>
      <div>
        <h3> {count}</h3>
        <button onClick={increm}>increment</button>
      </div>
    </>
  )
}
