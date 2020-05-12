import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from  './/components/header/header.component';
import SignInAndSignUpPage from '..//src/pages/Sign-in//Sign-in.component';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Switch>
       
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;