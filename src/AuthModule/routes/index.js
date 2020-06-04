import { Route } from 'react-router-dom'

import LoginPage from '../components/LoginPage/index'
import Authentication from '../components/Authentication/index'

import { LOGIN_PATH, RIDE_FORM_PATH } from '../constants'

const routes = [
   <Route key={Math.random()} path={LOGIN_PATH} component={LoginPage} />,
   <Route
      key={Math.random()}
      path={RIDE_FORM_PATH}
      component={Authentication}
   />
]

export default routes
