// Create a simple React application with two routes: Home and About. Use React Router for client-side 
// routing and ensure that both pages are accessible, including appropriate aria attributes.

import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Home() {

  return (

    <div>

      <h1>Home Page</h1>

      <p>Welcome to the home page!</p>

    </div>

  );

}

function About() {

  return (

    <div>

      <h1>About Page</h1>

      <p>Learn more about us on this page.</p>

    </div>

  );

}

function App() {

  return (

    <Router>

      <nav>

        <ul>

          <li>

            <Link to="/" aria-label="Home">Home</Link>

          </li>

          <li>

            <Link to="/about" aria-label="About">About</Link>

          </li>

        </ul>

      </nav>

      <Switch>

        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />

      </Switch>

    </Router>

  );

}

export default App;