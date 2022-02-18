import './App.css';
import React from 'react';
import User from './Component/Data';
import Spinner from './Component/Spinner';
import Navbar from './Component/Header/Menu';
import Chat from './Component/chat';
import Pangu from './Component/whatsapp/whatsapp';
import  {HashRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Switch>
          <Route path='/Data' component={User} />
          <Route path='/about' component={Spinner} />
          <Route path='/service' component={Chat} />
          <Route path='/login' component={Pangu} />
        </Switch>
        <p>Footer Section added Later</p>
      </Router>
      
    </div>
  );

}

export default App;
