import {createStore, bindActionCreators} from "redux";
import reducer from './reducer'
import  {increment, decrement ,reset} from "./actions";

const inc = document.getElementById('inc'),
    dec= document.getElementById('dec'),
    rst= document.getElementById('rst');

const store = createStore(reducer);
const {dispatch} = store;

// const bindActionCreator =(creator, dispatch)=>(...params)=>{
//     dispatch(creator(...params));
// }


const incDispatch =bindActionCreators(increment,dispatch);
const decDispatch =bindActionCreators(decrement, dispatch)
const resetDispatch =bindActionCreators(reset,dispatch)


inc.addEventListener('click', ()=>{
    incDispatch()
})
dec.addEventListener('click', ()=>{
  decDispatch()
})
rst.addEventListener('click', ()=>{
    resetDispatch();
})

const update = ()=>{
    document.querySelector('.counter').textContent = store.getState().toString();
};

store.subscribe(update)



