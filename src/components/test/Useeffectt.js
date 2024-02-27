import React ,{useState ,useEffect}from 'react'
import Usedocumenttitle from './Usedocumenttitle';
import Custom from './Custom';
export default function Useeffectt() {
  const data = Custom();
  //  const [Count, setCount] = useState(0);
  Usedocumenttitle(data.count)
  return (
    <div>
      <h1> hello effect </h1>
      <h2>{data.count}</h2>
      <button onClick={data.handler}>click</button>
    </div>
  )
}
/*import React,{useState ,useEffect}from 'react'

export default function Useeffectt() {
    let [value , setValue] = useState("posts");
    // let [value1 , setValue1] = useState(0);
   
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${value}`)
  .then(response => response.json())
  .then(json => console.log(json))
      // console.log(value,"l")
    },[value])
  return (
    <>
    <div>
      <button onClick={()=>{setValue('posts')}}>posts</button>
      <button onClick={()=>{setValue('users')}}>users</button>
      <button onClick={()=>{setValue('comments')}}>comments</button>
    </div>
    <h3>{value}</h3>
      {/* <button onClick={()=>{setValue1(value1+=1)}}>comments</button>
    <h3>{value1}</h3> */
//     </>
//   )
// }
