import React, { useContext } from 'react';
import { Data } from '../App'
const Child = () => {
    let alldata = useContext(Data);
    console.log(alldata)
    return (
        <div>
            <h1> chilld component </h1>
            <h1> hello {alldata.name}</h1>
            <h1> hello {alldata.post}</h1>
            <h1 onClick={() => { alldata.add(2323) }}> hello</h1>
        </div>
    );
}

export default Child;
