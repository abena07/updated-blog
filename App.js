import './App.css';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './components/NavBar'



function App() {
  return (
    <div className="App">

      <Router>
         <NavBar />
        <Switch>
          <Route exact path="/" component={SignupForm}/>
          <Route path="/login" component={LoginForm}/>
          
        </Switch>
       


         </Router>
      
      
      

    </div>
  );
}

export default App;
