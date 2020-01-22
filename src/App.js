import React from 'react';
import './App.css';
import AutoComplete from './AutoComplete/AutoComplete';
import UkCities from './UkCities/UkCities';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <div className='App'>
          <AutoComplete items={UkCities} />
        </div>
      </Router>
    </main>
  );
}

export default App;
