import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Selector from './components/Selector';
import Level from './components/Level';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Login from './components/Login';

class AppRoutes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/colors/:color' component={Home}/>
                        <Route path='/quiz' component={Selector} exact/>
                        <Route path='/quiz/:color' component={Level} exact/>
                        <Route path='/login' component={Login} exact/>
                        <Route path='/statistics' component={Statistics} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default AppRoutes;