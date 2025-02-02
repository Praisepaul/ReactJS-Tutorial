import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Banner from './Components/Banner/Banner.jsx';
import RowPost from './Components/RowPost/RowPost.jsx';
import { Actions, Originals, Comedy, Horror } from './urls.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={ Originals } title='Netflix Originals' />
      <RowPost url={ Actions } title='Action' isSmall />
      <RowPost url={ Comedy } title='Comedy' isSmall />
      <RowPost url={ Horror } title='Horror' isSmall />
    </div>
  );
}

export default App;
