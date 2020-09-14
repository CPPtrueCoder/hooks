import React from "react";
import ReactDOM from 'react-dom'
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from './reducer'

import App from './components/App'

const store = createStore(reducer);


// const bindActionCreator =(creator, dispatch)=>(...params)=>{
//     dispatch(creator(...params));
// }


//const {increment, decrement, reset} = bindActionCreators(actions, dispatch);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root'))


