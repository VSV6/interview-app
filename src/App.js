import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Dashboard from './pages/dashboard'
import Header from './pages/header'
import Login from './pages/login'

const store = configureStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
