  export let increment =(num)=>{
    return {type:"INC" ,payload:num}
 }
  export let decrement =()=>{
    return {type:"DEC" }
 }
export let addname =(num)=>{
    return {type:"ADDNAME" ,payload:num}

}



/* It uses 'type' property to inform about data that should be sent to the Store. In this folder, 
we will create two files: index.js and index.spec.js. Here, we have created an action creator that
 returns our action and sets an id for every created item.*/