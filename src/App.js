import './App.css';
import './components/background.css';
import React from "react";
import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Searchbar from './components/Searchbar';
import List from './components/List';
import DrugDesc from './components/DrugDesc';

function App() {
  
  return (
    <div className='body'>
    <BrowserRouter>
      <Navbar/>
      <Routes>  
          <Route exact path="/" element={<Searchbar/>}/>
          <Route exact path="/list" element={<List/>}/>
          <Route exact path="/list/:drugName" element={<DrugDesc/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;