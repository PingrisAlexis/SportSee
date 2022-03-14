import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { Header, VerticalNavbar } from './components';
import { UserProfil } from './views/index'

function App() {
  return (
      <div className="App">
          {/*<BrowserRouter>*/}
              <Header />
              <VerticalNavbar />
          <UserProfil/>
              {/*<Switch>*/}
              {/*     <route   component={UserProfil}/>*/}

              {/*</Switch>*/}
          {/*</ BrowserRouter>*/}
      </div>
  );
}

export default App;
