import React from 'react';

import StackChart from './components/StackChart';

import './App.css';
import HomeComponent from './components/HomeComponent';
import DataComponent from './components/DataComponent';
import { Route, Link, Router, BrowserRouter} from "react-router-dom";

function App() {
  return (    
    <BrowserRouter>
      <div className = "container">
      <Route exact path ="/" component = {HomeComponent}/>
      <Route exact path ="/data" component = {DataComponent}/>
      <div>
        <StackChart />
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;