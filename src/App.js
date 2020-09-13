import React,{useState,useEffect} from 'react'



function App() {
    const [counter , setCounter] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${counter} раз`;
    });

  return(
      <div>
        <h1>Текущий счетчик: {counter} </h1>
          <button className="btn btn-success" onClick={()=>setCounter(counter+1)}>Добавить</button>
          <button className="btn btn-danger" onClick={()=>setCounter(counter-1)}>Убрать</button>

      </div>
  )
}


export default App;