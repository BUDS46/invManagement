/* eslint-disable */
import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, UseHistory } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav>
            <h1>Welcome to the website.</h1>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
          </Nav>

          <Switch>
            <Route path="/" exact element={Home} />
            <Route path="/about" element={About} />
            <Route path="/contact" element={Contact} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </main>
      </Router>
    );
  }
}
export default App;
// // Home page
// function Home() {
//   return (
//     <>
//       <h1>Home</h1>
//       <Faketext />
//     </>
//   );
// }
// // About page
// function About() {
//   const history = UseHistory();
//   return (
//     <>
//       <h1>About</h1>
//       <button type="button" onClick={() => history.push('/')}> Go to home page </button>
//       <Faketext />
//     </>
//   );
// }
// // Page for data input - use of "device"/database storage
// function Device() {
//   const history = UseHistory();
//   return (
//     <>
//       <h1>Device</h1>
//       <button type="button" onClick={() => history.push('/')}> Go to home page </button>
//       <Faketext />
//     </>
//   );
// }
// // Placeholder text constant
// function Faketext() {
//   return (
//     <p>
//       Placeholder text until additional development.
//     </p>
//   );
// }
