import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Header, VerticalNavbar} from './components';
import {UserProfil, NotFound} from './views';

function App() {

  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <VerticalNavbar />
              {/*<UserProfil />*/}
              <Switch>
                  {/*<Route path="/" exact>*/}
                  {/*    <Redirect to="/users/12" />*/}
                  {/*</Route>*/}
                  <Route exact path="/users/:id"  component={UserProfil}/>
                  <Route component={NotFound}/>
                  <Route path="*">
                      <Redirect to="/not-found" />
                  </Route>
              </Switch>
          </ BrowserRouter>
      </div>
  );
}

export default App;
