import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';


function App() {
  const [ocasions, setOcasions] = useState([]);

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    fetch("https://mobile-staging.gametime.co/v1/search?q=oakland")
    .then(response => {return response.json()})
    .then(data => {setOcasions(data)})


  }
  return (
    <div className="App">
     <SearchBar placeholder="Enter event name.." data={ocasions}/>


    </div>
  );
}

export default App;
