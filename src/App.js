import { BrowserRouter as Router , Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">

      <Header/>

      <Filter/>
      <Countries/>

        
 
    </div>
  );
}

export default App;
