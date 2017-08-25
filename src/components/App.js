import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from '../views/Main';
import Details from '../views/Details';

const App = props => {
  return (
    <Router>
      <div className="app">
        <Route exact strict path="/main" component={Main} />
        <Route exact strict path="/details/:id" component={Details} />
      </div>
    </Router>
  )
}

export default App;