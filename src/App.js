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
                <Switch>
                    <Route exact path="/user/:id"  component={UserProfil}/>
                    {/*<Route path="/not-found" component={NotFound}/>*/}
                    <Route path="*">
                        <Redirect to="/user/12" />
                    </Route>
                </Switch>
            </ BrowserRouter>
        </div>
    );
}

export default App;
