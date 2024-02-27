import { combineReducers } from "redux";

let initialstate = { count: 0, names: [] };
let change = (state = initialstate, action) => {
    switch (action.type) {
        case 'INC':
            return { ...state, count: state.count + action.payload };
        case 'DEC':
            return { ...state, count: state.count - 1 };
        case "ADD":
            return { ...state, count: state.count + action.payload }
        case "ADDNAME":
            return { ...state, names: [...state.names, action.payload] }
        default:
            return state;
    }

}


export let root = combineReducers({ change })

//context api , context hooks,  redux  ;