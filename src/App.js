import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';
import AdminPage from './pages/AdminPage';

import AuthService from './services/auth.service';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tasks">
            {AuthService.isLoggedIn() ? <TaskPage/> : <LoginPage /> }
          </Route>
          <Route path="/login" component={LoginPage}/>

          <Route path="/admin">
            {AuthService.isLoggedIn() ? <TaskPage/> : <AdminPage /> }
          </Route>
          <Route path="/">
            {AuthService.isLoggedIn() ? <AdminPage/> : <LoginPage /> }
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
