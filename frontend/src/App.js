import React from 'react';
import logo from './logo.svg';
import './App.css';
import IssueList from './components/IssueList';
import {Switch, Route} from 'react-router-dom';
import AddIssue from './components/AddIssue';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component = {IssueList} exact/>
        <Route path="/add-issue" component = {AddIssue}/>
      </Switch>
    </div>
  );
}

export default App;
