import { useEffect, useState } from 'react';
import './App.css';
import AddToDb from './components/Add/AddToDb';
import { reducer } from './components/utilities/fakeDb';

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('myDb.json')
      .then(res => res.json())
      .then(data => setDatas(data));
  }, []);
  const total = reducer(datas)
  return (
    <div className="App">
      <h1>Total price: {total}</h1>
      <div>

        {datas.map(person => <AddToDb key={person.id} datas={person}></AddToDb>)}
      </div>
    </div>
  );
}

export default App;
