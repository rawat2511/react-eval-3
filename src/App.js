import './App.css';
import Home from './Components/Home';
import { Info } from './Components/Info';
import { Prerequsite } from './Components/Prerequsite';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Home />
      <Prerequsite />
      <Info />
    </div>
  );
}

export default App;
