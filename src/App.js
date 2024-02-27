import React from 'react';
 import Form from './firebase/Form'
import Main from './Main'
const App = () => {
  return (
    <div>
      <Form/>
    </div>
  );
}

export default App;

























// // import { useSelector, useDispatch } from "react-redux";
// // import { increment, decrement, addname  } from './redux/Action'
// import Axios from 'axios'
// import { useEffect } from "react";

// // import Product from "./Product";
// const App = () => {
//   // let data = useSelector(state => state.change);
//   // let dispatch = useDispatch();
//   useEffect(() => {
//     Axios.get("http://localhost:4000/users")
//       .then((result) => console.log(result.data))
//   }, [])
//   let deleted = () => {
//     Axios.delete("http://localhost:4000/users/3")
//       .then((res) => console.log(res))
//   }
//   // json-server --watch db.json --port 4000
//   return (
//     <>
//       <button onClick={deleted}>delete  c   d d dvnyou want to delete </button>simple change
//  <h1> data count :{data.count} </h1>
//       <h1> data name :{data.names} </h1>
//       <button onClick={() => { dispatch(increment(22)) }}> inc</button>
//       <button onClick={() => { dispatch(decrement()) }}> dec</button>
//       <button onClick={() => { dispatch(addname("rahul")) }}>add anme</button>
//       <button onClick={() => { dispatch({ type: 'ADD', payload: 10 }) }}> inc</button>
//     <Product/>
//  </>
//   );
// }

// export default App;
