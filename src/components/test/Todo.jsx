import React,{memo} from 'react'

   function Todo({todos , addTodo}) {
    console.log(todos)
 console.log("child render")
    return (

<>
<h3> My Todos</h3>
{  todos.map( (todo,index)=>{
    return <p key={index}>{todo + index}</p>
})}

 <button onClick={addTodo}> add todo</button>
</>
  )
}
export default memo(Todo)
