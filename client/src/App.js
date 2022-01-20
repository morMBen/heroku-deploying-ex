import { useState } from 'react';
import './App.css';
import myApi from './api/api';

function App() {
  const [user, setUser] = useState('');
  const getReq = async () => {
    const { data } = await myApi.get('users');
    setUser(data.userName);
    console.log(data.userName);
  };
  return (
    <div className='App'>
      <h1>Alor Dalor</h1>
      <button onClick={getReq}>Get req</button>
      <h3>{user}</h3>
    </div>
  );
}

export default App;
