import React from 'react';
import { Hoc } from './Hoc';
console.log(Hoc)
const Main = ({ data,Load, handlestate }) => {
    return (
        <div> 
<Load></Load>
            <h1> {data}</h1>
            <button onClick={() => { handlestate(90) }}> Click me !</button>
        </div>
    );
}

export default Hoc(Main);
