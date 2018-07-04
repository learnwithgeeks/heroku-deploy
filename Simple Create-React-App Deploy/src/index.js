import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Form from './form';
import Card from './card';
import AllCardData from './allCardData';
import SearchResult from './searchResult';
import Profile from './profile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
          <Route exact path="/" name='form' component={Form}/>
          <Route exact path="/card" name='card' component={Card}/>
          <Route exact path="/allcarddata" name='all card' component={AllCardData}/>
          <Route exact path="/profile" name="profile" component={Profile}/>
      </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
