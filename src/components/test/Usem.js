// import React,{useState ,useMemo} from 'react';

// const Usem = () => {
//   const [count, setcount] = useState(0);
//   const [item, setitem] = useState(0);
 
//  let  iseven = useMemo(()=>{
//     // let i=0;
//     // while(i<=99990000000){
//     //   i++;  
//     // return  count%2==0   
//     // }
//     console.log("called");
//   } ,[count])
//   return (
//     <div>
//     <h1>   {count}</h1>
//      <h1>  {item}</h1>
//      <h3>  {iseven?"even":"odd"}</h3>
//       <button onClick={()=>{setcount(count+1)}}>inc</button>
//       <button onClick={()=>{setitem(item+1)}}>inc item</button>
//     </div>
//   );
// }

// export default Usem;
import { useState,useMemo } from "react";

const Usem = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    console.log(todos)
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating..." );
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default Usem;