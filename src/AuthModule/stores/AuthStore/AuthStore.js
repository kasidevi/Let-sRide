import { observable, action } from 'mobx'
import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { setAccessToken } from '../../../utils/StorageUtils'

class AuthStore {
   @observable getUserLogInAPIStatus
   @observable getUserLogInAPIError
   @observable authAPIService
   authService
   constructor(authService) {
      this.authService = authService
      this.init()
   }

   @action.bound
   userLogIn() {
      const userLogInPromise = this.authService.logInAPI()
      return bindPromiseWithOnSuccess(userLogInPromise)
         .to(this.setUserLogInAPIStatus, this.setUserLogInAPIResponse)
         .catch(this.setUserLogInAPIError)
   }

   @action.bound
   setUserLogInAPIResponse(response) {
      setAccessToken(response.access_token)
   }

   @action.bound
   setUserLogInAPIError(error) {
      this.getUserLogInAPIError = error
   }

   @action.bound
   setUserLogInAPIStatus(apiStatus) {
      this.getUserLogInAPIStatus = apiStatus
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
