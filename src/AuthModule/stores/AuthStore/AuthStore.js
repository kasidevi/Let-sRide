import { observable, action } from 'mobx'
import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
}
from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { setAccessToken } from '../../../utils/StorageUtils'

class AuthStore {
   @observable getUserLogInAPIStatus
   @observable getUserLogInAPIError
   @observable authAPIService
   @observable access_token
   authService
   constructor(authService) {
      this.authService = authService
      this.init()
      this.access_token = undefined;
   }

   @action.bound
   userLogIn(userName, password) {
      const userLogInPromise = this.authService.logInAPI(userName, password)
      return bindPromiseWithOnSuccess(userLogInPromise)
         .to(this.setUserLogInAPIStatus, this.setUserLogInAPIResponse)
         .catch(this.setUserLogInAPIError)
   }

   @action.bound
   setUserLogInAPIResponse(response) {
      setAccessToken(response.access_token)
      this.access_token = response.access_token;
   }

   @action.bound
   setUserLogInAPIError(error) {
      this.getUserLogInAPIError = error
      console.log(error)
   }

   @action.bound
   setUserLogInAPIStatus(apiStatus) {
      this.getUserLogInAPIStatus = apiStatus
      console.log(apiStatus)
   }

   @action.bound
   userLogOut() {}

   @action
   init() {
      this.getUserLogInAPIStatus = API_INITIAL
      this.getUserLogInAPIError = null
   }
}

export { AuthStore }
