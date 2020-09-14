import React from "react";
import ReactDOM from 'react-dom'
import {createStore, bindActionCreators} from "redux";
import reducer from './reducer'
import * as actions from "./actions";
import Counter from './App'

const store = createStore(reducer);
const {dispatch} = store;

// const bindActionCreator =(creator, dispatch)=>(...params)=>{
//     dispatch(creator(...params));
// }


const {increment, decrement, reset} = bindActionCreators(actions, dispatch);


const update = () => {
    ReactDOM.render(
        <Counter
            counter ={store.getState()}
             inc={increment}
             dec={decrement}
             rst ={reset}/>,
        document.getElementById('root'))


};
update();
store.subscribe(update)

