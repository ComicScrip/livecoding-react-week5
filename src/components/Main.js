import React from 'react';
import './Main.css';
import HomePage from './Home';
import {
  Switch,
  Route
} from 'react-router-dom';
import StudentsPage from './StudentsPage';

function Main () {
  return (
    <main>
      <Switch>
        <Route path='/students'>
          <StudentsPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
}
export default Main;
