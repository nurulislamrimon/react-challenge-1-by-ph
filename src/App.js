import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

const Counter = () => {
  const [charge, setCharge] = useState(100);
  const decreaseCharge = () => setCharge(charge - 10);
  return (
    <div className='container'>
      <h1>Battery: {charge}%</h1>
      <button onClick={decreaseCharge}>Battery Down</button>
    </div>
  )
}

export default App;
