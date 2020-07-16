import React from 'react';
import './App.css';
import AutoComplete2 from './AutoComplete/AutoComplete';
import UkCities from './UkCities/UkCities';
import { BrowserRouter as Router } from 'react-router-dom';

const  App = () => 
   (
    <main>
      <Router>
        <div className='App'>
          <AutoComplete2 items={UkCities} />
        </div>
      </Router>
    </main>
  );


export default App;
