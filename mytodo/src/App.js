import './App.css';
import React, { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [completed, setCompleted] = useState([])

  const deleteItem = (id) => {
    const list = toDos.filter(item => item.id !== id);
    setToDos(list);
  }

  const deleteCompltedItem = (id) => {
    const itemToMove = completed.find(item => item.id === id);
    if (itemToMove) {
      const list = completed.filter(item => item.id !== id);
      setToDos([...toDos, { ...itemToMove, status: false }]);
      setCompleted(list);
    }
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>

      <div className='subHeading'>
        <br />

        <h2>Whoop, it's {new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' }).format(new Date())}</h2>
      </div>

      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder='🖊️ Add item...' />
        <i onClick={() => {
          if (toDo.length <= 0) {
            return alert("Task cannot be empty!");
          }
          setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          setToDo('')
        }
        } className='fas fa-plus'></i>
      </div>
        {toDos.length === 0 && <h2 className='subHeading' style={{marginTop: "2rem", textAlign: "center"}}>You're great! No pending tasks 😍</h2>}
      <div className="todos">
        {
          toDos.map((value) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    const updatedItem = { ...value, status: e.target.checked };
                  
                    setToDos(toDos.filter(item => item.id !== value.id));

                    if (e.target.checked) {
                      setCompleted(prev => [...prev, updatedItem]);
                    } else {
                      setToDos(prev => [...prev, updatedItem]);
                    }

                  }} checked={value.status} type="checkbox" />
                  <p>
                    {value.text}
                  </p>
                </div>
                <div className="right">
                  <i onClick={() => deleteItem(value.id)} className='fas fa-times'></i>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="completed-tasks">
        {completed.length > 0 && <h2 >Completed Tasks</h2> }
        <div className='todos'>
          {
            completed.map((value) => {
              if (value.status) {
                return (
                  <div className="todo">
                    <div className="left">
                      <p> {value.text} </p>
                    </div>
                    <div className="right">
                      <i onClick={() => deleteCompltedItem(value.id)} className='fas fa-times'></i>
                    </div>
                  </div>
                )
              }
              return null
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
