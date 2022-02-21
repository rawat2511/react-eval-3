import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import Home from './Components/Home';
import { Info } from './Components/Info';
import { Prerequsite } from './Components/Prerequsite';
import { Register } from './Components/Register';

function App() {
  return (
    <div className="App">
      <h1>.</h1>
      <h1>.</h1>

      <Routes >
        <Route path='/' element={ <Home /> } />
        <Route path='/prerequsite' element={ <Prerequsite /> }  />
        <Route path='/info' element={ <Info /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
      </Routes>

      {/* <Home />
      <Prerequsite />
      <Info />
      <Register /> */}
    </div>
  );
}

export default App;
