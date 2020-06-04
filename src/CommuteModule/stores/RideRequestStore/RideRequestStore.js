import { observable, action } from 'mobx'
import {
   API_INITIAL,
   API_FAILED,
   API_SUCCESS,
   API_FETCHING
} from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { setAccessToken } from '../../../utils/StorageUtils'

class RideRequestStore {
   @observable RideRequestAPIStatus
   @observable RideRequestAPIError
   @observable rideRequestAPIService
   rideRequestService
   constructor(rideRequestService) {
      this.rideRequestService = rideRequestService
      this.init()
   }

   @action.bound
   userRequest() {
      const requestPromise = this.rideRequestService.requestAPI()
      return bindPromiseWithOnSuccess(requestPromise)
         .to(this.setRideRequestAPIStatus, this.setRideRequestAPIResponse)
         .catch(this.setRideRequestAPIError)
   }

   @action.bound
   setRideRequestAPIResponse(response) {
      setAccessToken(response.access_token)
   }

   @action.bound
   setRideRequestAPIError(error) {
      this.getRideRequestAPIError = error
   }

   @action.bound
   setRideRequestAPIStatus(apiStatus) {
      this.getRideRequestAPIStatus = apiStatus
   }

   @action
   init() {
      this.getRideRequestAPIStatus = API_INITIAL
      this.getRideRequestAPIError = null
   }
}

export { RideRequestStore }
