import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import LoginPageRoute from './AuthModule/routes/LoginPageRoute/index'
import Authentication from './AuthModule/components/Authentication/index'
import CounterPage from './components/common/CounterPage/index'
import HomeScreen from './CommuteModule/components/HomeScreen/index.js'

import './App.css'

class App extends React.Component {
   render() {
      return (
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               <Route exact path='/LoginPage'>
                  <LoginPageRoute />
               </Route>

               <Route exact path='/ride-form'>
                  <Authentication />
               </Route>

               <Route exact path='/counter'>
                  <CounterPage />
               </Route>

               <Route exact path='/home-screen'>
                  <HomeScreen />
               </Route>

               <Route exact path='/page-1'>
                  <Page1 />
               </Route>

               <Route path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      )
   }
}
export default App
