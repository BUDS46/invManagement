import React, { Fragment } from 'react';
import {
  HashRouter as Router, Route, Link, Switch, UseHistory,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/device">Device</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/device" component={Device} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </main>
    </Router>
  );
}

// Home page
function Home() {
  return (
    <>
      <h1>Home</h1>
      <Faketext />
    </>
  );
}
// About page
function About() {
  const history = UseHistory();
  return (
    <>
      <h1>About</h1>
      <button onClick={() => history.push('/')}> Go to home page </button>
      <Faketext />
    </>
  );
}
// Page for data input - use of "device"/database storage
function Device() {
  const history = UseHistory();
  return (
    <>
      <h1>Device</h1>
      <button onClick={() => history.push('/')}> Go to home page </button>
      <Faketext />
    </>
  );
}
// Placeholder text constant
function Faketext() {
  return (
    <p>
      Placeholder text until additional development.
    </p>
  );
}
