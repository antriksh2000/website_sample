import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/main" component={Main}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/login" component={Login}></Route>

    <Redirect from="/" to="/Register"/>
      </Switch>

    </div>
  );
}

export default App;
