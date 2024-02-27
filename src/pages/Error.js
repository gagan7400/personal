import React ,{useEffect}from 'react'
import {useNavigate  } from 'react-router-dom';

import './Home.css';
export default function Error() {
  let Navigate =useNavigate()
  useEffect(() => {
    console.log("you are redirected to home page")
    Navigate("/")
  });
  return (
    <div className="_main">
    <div className="_inner">
    <h1> Error Page Not Found</h1>
    <p>hdhdhd</p>
    </div>
  </div>
   
    
  )
}
