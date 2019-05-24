import * as React from 'react';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import APP from './commponents/APP';
import Login from './commponents/Login';
import Home from './routes/home/Home';
export default function RouterConfig() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <APP>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                    </Switch>
                </APP>
            </Switch>
        </BrowserRouter>
    );
}
