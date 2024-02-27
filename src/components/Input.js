import React, { useState, useEffect } from 'react'

let getdata = () => {
  let Data = localStorage.getItem("data");
  if (Data) {
    return JSON.parse(Data);
  } else {
    return []
  }
}
function Input() {
  let [data, setdata] = useState(getdata());
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  
  return (
    <div>
      <form onSubmit={sub}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Input
