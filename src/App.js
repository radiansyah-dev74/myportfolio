import React from 'react';
import './css/App.css';
import Menu from './component/Menu';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <container classname="w3-blue">
        <Menu />
        <About />
      </container>
    </div >
  );
}

export default App;
