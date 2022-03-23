import { useEffect, useState } from 'react';
import './App.css';
import AddToDb from './components/Add/AddToDb';

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('myDb.json')
      .then(res => res.json())
      .then(data => setDatas(data));
  }, [])
  return (
    <div className="App">
      {datas.map(person => <AddToDb key={person.id} datas={person}></AddToDb>)}
    </div>
  );
}

export default App;
