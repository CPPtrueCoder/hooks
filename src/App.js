import React,{useState,useEffect} from 'react'



function Counter({counter, inc,dec,rst}) {

  return(
      <div className='App' >
      <div class="counter-wrap">
          <div class="counter-frame">
              <h1 class ="counter">{counter}</h1>
          </div>
          <div class="buttons">
              <button onClick={inc} className="btn btn-success user-btn">
                  <img src="./plus.svg" alt="plus-icon"/>
              </button>
              <button onClick={dec} className="btn btn-warning user-btn">
                  <img src="./minus.svg" alt="plus-icon"/>
              </button>
              <button  onClick={rst} className="btn btn-danger user-btn">
                  <img src="./reset.svg" alt="reset-icon"/>
              </button>
          </div>
      </div>
      </div>

  )
}


export default Counter;