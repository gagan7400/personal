import React, { useState } from 'react';

export const Hoc = (Wrapped) => {
    function Under() {
        const [data, setdata] = useState(0);
        let handlestate = (a) => { setdata(a) }
        let Load =()=>{
            return  <div>Loading...</div> 
        }
        return <Wrapped data={data} handlestate={handlestate} Load={Load} />
    }
    return Under
}


