import React from 'react';
import './css/App.css';
import Menu from './component/Menu';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <container classname="w3-blue">
        <Menu />
        <Home />
      </container>
    </div >
  );
}

export default App;
