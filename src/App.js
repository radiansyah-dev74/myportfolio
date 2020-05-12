import React from 'react';
import './css/App.css';
import Menu from './component/Menu';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/home" component={Home} />

          <Route path="/resume" component={Resume} />
        </Switch>

      </div >
    </Router>
  );
}

export default App;
