import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Todos from './Todos';
import Todo from './Todo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Todos />} />
        <Route path="/todo/:id" children={<Todo />} />
      </Switch>
    </Router>
  );
}

export default App;
