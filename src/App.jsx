import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage'
import Pomodore from './pages/Pomodore';


const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TasksPage} />
        <Route path="/pomodore" component={Pomodore} />
      </Switch>
    </Router>
  </div>
);

export default App;
