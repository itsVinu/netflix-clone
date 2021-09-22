import './App.css';
import Base from './Base';
import Home from './Home';
import {Switch,Route} from 'react-router-dom' ;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/netflix' component={Base} />
      </Switch>
    </div>
  );
}

export default App;
