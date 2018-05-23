import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Selector from './components/Selector';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Login from './components/Login';
import Red from './components/colors/Red';
import Green from './components/colors/Green';
import Maroon from './components/colors/Maroon';
import Orange from './components/colors/Orange';
import Purple from './components/colors/Purple';
import Yellow from './components/colors/Yellow';
import Blue from './components/colors/Blue';

class AppRoutes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/colors/:color' component={Home}/>
                        <Route path='/quiz' component={Selector} exact/>
                        <Route path='/quiz/red' component={Red} exact/>
                        <Route path='/quiz/green' component={Green} exact/>
                        <Route path='/quiz/yellow' component={Yellow} exact/>
                        <Route path='/quiz/blue' component={Blue} exact/>
                        <Route path='/quiz/maroon' component={Maroon} exact/>
                        <Route path='/quiz/purple' component={Purple} exact/>
                        <Route path='/quiz/orange' component={Orange} exact/>
                        <Route path='/login' component={Login} exact/>
                        <Route path='/statistics' component={Statistics} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default AppRoutes;