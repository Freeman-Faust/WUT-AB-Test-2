import logo from './logo.svg';
import './App.css';
import DispContacts from './components/DispContacts';
import React, {useEffect} from 'react';

function App() {
  const [contacts, setContacts] = React.useState([]);
  useEffect(()=>
      {fetch('http://localhost:8888').then(x=>x.json()).then(x=>setContacts(x))
      },[]);

    console.log(contacts)
  return (
    <div className="App">
      <h1>Address Book</h1>
      <DispContacts contacts={contacts}/>
    </div>
  );
}

export default App;
