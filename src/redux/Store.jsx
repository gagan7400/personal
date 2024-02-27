import { root } from './Reducer';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(root)

store.subscribe(()=>{
    console.log(store.getState())
})
export default store

