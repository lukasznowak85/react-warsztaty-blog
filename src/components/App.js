import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Main from '../views/Main';
import Details from '../views/Details';

const App = props => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" render={() => <Redirect to="/main"/>} />
        <Route exact strict path="/main" component={Main} />
        <Route exact strict path="/details/:id" component={Details} />
      </div>
    </Router>
  )
}

export default App;