//creating a counter using useState
import {useState} from 'react'
import Counter from './Counter';
import counter from './Counter';
function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      <Counter/>
    </div>
  );
}

export default App;
