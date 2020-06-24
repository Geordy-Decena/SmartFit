import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import ExerciseList from './components/ExerciseList'
import Selections from './components/Selections'
import SmartWorkout from './components/SmartWorkout'
import SmartExerciseList from './components/SmartExerciseList'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store'
import { Container } from 'reactstrap'
import { loadUser } from './actions/authActions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="body" >
            <AppNavbar />
            <Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/ExerciseList' component={ExerciseList} />
                <Route exact path='/Selections' component={Selections} />
                <Route exact path='/SmartWorkout' component={SmartWorkout} />
                <Route exact path='/SmartExerciseList' component={SmartExerciseList} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider >
    );
  }
}

export default App;