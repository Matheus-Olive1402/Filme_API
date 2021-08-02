import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route path="*" component={Erro}/>
                <Route component={Erro}/>           
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;