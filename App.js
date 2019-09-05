import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import Portfolio from './routes/Portfolio/Portfolio'
import Resume from './routes/Resume/Resume'
import Contact from './routes/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="app-container">
    <Header ></Header>
    <main className='main'>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/resume' component={Resume} />
    <Route path='/contact' component={Contact} />
    </Switch>
    </main>

    </div>
  );
}

export default App;
