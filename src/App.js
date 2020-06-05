import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import LoginPageRoute from './AuthModule/routes/LoginPageRoute/index'
import HomeScreen from './CommuteModule/components/HomeScreen/index.js'
import RideRequest from './CommuteModule/components/RideRequest/index.js'
import ShareRide from './CommuteModule/components/ShareRide/index.js'
import AssetTransportRequest from './CommuteModule/components/AssetTransportRequest/index.js'
import ShareTravelInfo from './CommuteModule/components/ShareTravelInfo/index.js'
import UserMiniProfile from './CommuteModule/components/UserMiniProfile/index.js'
import UserRequests from './CommuteModule/components/UserRequests/index.js'
import stores from './AuthModule/stores'
import commuteStores from './CommuteModule/stores'

import './App.css'

class App extends React.Component {
   render() {
      return (
         <Provider {...stores} {...commuteStores}>
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  <Route exact path='/LoginPage'>
                     <LoginPageRoute />
                  </Route>

                  <Route exact path='/home-screen'>
                     <HomeScreen />
                  </Route>

                  <Route exact path='/ride-from'>
                     <RideRequest />
                  </Route>

                  <Route exact path='/asset-transport-request'>
                     <AssetTransportRequest />
                  </Route>

                  <Route exact path='/share-ride'>
                     <ShareRide />
                  </Route>

                  <Route exact path='/share-travel-info'>
                     <ShareTravelInfo />
                  </Route>

                  <Route exact path='/user-mini-profile'>
                     <UserMiniProfile />
                  </Route>
                  <Route exact path='/user-requests'>
                     <UserRequests />
                  </Route>

                  <Route path='/'>
                     <HomePage />
                  </Route>
               </Switch>
            </Router>
         </Provider>
      )
   }
}
export default App
