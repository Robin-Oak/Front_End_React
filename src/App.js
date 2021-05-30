import './App.css';
import HomeComponent from './components/HomeComponent';
import DataComponent from './components/DataComponent';
import StackchartComponent from './components/StackchartComponent';
import { Route, Link, Router} from "react-router-dom";

function App() {
  return (    
      <div className = "container">
      <Route exact path ="/" component = {HomeComponent}/>
      <Route exact path ="/data" component = {DataComponent}/>
      <Route exact path ="/" component = {StackchartComponent}/>
    </div>
  );
}

export default App;