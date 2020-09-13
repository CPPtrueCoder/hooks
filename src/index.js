import {createStore} from "redux";

const inc = document.getElementById('inc'),
    dec= document.getElementById('dec'),
    rst= document.getElementById('rst');
const reducer = (state= 0,action) =>{
    switch(action.type){
        case 'INC':
        return state +1;
        case 'DEC':
            return state -1;
        case 'RST':
            return state =0;
        default:
            return state;
    }

}

const increment =()=>({type: "INC"});
const decrement =()=> ({type:'DEC'});
const reset =()=> ({type:'RST'});

const store = createStore(reducer);
inc.addEventListener('click', ()=>{
    store.dispatch(increment());
})
dec.addEventListener('click', ()=>{
    store.dispatch(decrement());
})
rst.addEventListener('click', ()=>{
    store.dispatch(reset());
})

const update = ()=>{
    document.querySelector('.counter').textContent = store.getState().toString();
};

store.subscribe(update)



