
import './App.css';
import Cards from './Cards'

function App() {
  return (
    <div className="App">
      <h2>Answer to question -> 2 of 3 </h2>
      <h4>Please refresh before you start clicking</h4>
      <Cards amount={15}/>
    </div>
  );
}

export default App;
