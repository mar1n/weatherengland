import React from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete/AutoComplete';
import UkCities from './components/UkCities/UkCities';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
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

