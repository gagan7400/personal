import React, { Component } from 'react';
import Child from './Child';
import { Data } from '../App';
class Middle extends Component {
    render() {
        return (
            <div>
                <Child />
                <Data.Consumer>
                    {
                        (v) => {
                            return (
                                <>
                                    <h1> hello {v.name}</h1>
                                    <h1> hello {v.post}</h1>
                                    <h1 onClick={() => { v.add("harry") }}> hello </h1>
                                </>
                            )
                        }
                    }

                </Data.Consumer>
            </div>
        );
    }
}

export default Middle;
