import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Main from '../views/Main';
import Details from '../views/Details';
import NotFound from '../components/NotFound';

const App = props => {
  return (
    <Router>
      <div className="app">
        <Route path="/details" children={({match}) => {
          return (
            <span>Are you on details? {match ? 'Yes' : 'No'}</span>
          )
        }}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main"/>} />
          <Route exact strict path="/main" component={Main} />
          <Route exact strict path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;