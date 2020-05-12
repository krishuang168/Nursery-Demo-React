import React from 'react';
import Home from './component/Home'
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
