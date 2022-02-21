import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import { Info } from './Components/Info';
import { Prerequsite } from './Components/Prerequsite';
import { Register } from './Components/Register';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Routes >
        <Route path='/' element={ <Home /> } />
        <Route path='/prerequsite' element={ <Prerequsite /> }  />
        <Route path='/info' element={ <Info /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>

      {/* <Home />
      <Prerequsite />
      <Info />
      <Register /> */}
    </div>
  );
}

export default App;
