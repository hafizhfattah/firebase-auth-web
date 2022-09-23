import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Registrasi from './Components/Registrasi';

function App() {
  return (
      <Router>
        <Route path={["/home", "/"]} exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registrasi" component={Registrasi} />
      </Router>
  );
}

export default App;
