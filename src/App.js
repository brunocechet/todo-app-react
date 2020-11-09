import React from 'react';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Material
import { Container, CssBaseline } from '@material-ui/core';

// Container Components
import Tasks from './pages/Tasks';
import Users from './pages/Users';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Router basename="/todos">
          <Switch>
            <Route path="/tasks/:user">
              <Tasks />
            </Route>
            <Route path="/">
              <Users />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
