import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
