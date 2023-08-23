
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Tasks from './components/Tasks';
import './App.css';
import LoginForm from './components/LoginForm';



const  App = ()=> { 
  return (
    <div className="App">

      <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component ={Tasks}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  ); 
}

export default App;
