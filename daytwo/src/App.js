//creating a counter using useState
import {useState} from 'react'
import Employee from './Counter';
import Counter from './Counter';
function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
  let obj = {
    title:'1st Counter',
    count,
    place:'Karnataka'
  }
  let emp = [{Name: 'Praise', age: 18},
             {Name: 'Grace', age: 21},
             {Name: 'Mariamma', age: 50},
             {Name: 'Paulson', age: 52}]
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      <Counter {...obj}/> 
      <Counter title = "2nd Counter" count = {count}/> 
      {
        emp.map((emp, index) =>
           (
            <Employee key={index} {...emp} />
          )
        )
      }
    </div>
  );
}

export default App;