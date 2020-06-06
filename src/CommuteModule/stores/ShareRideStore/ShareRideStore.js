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

class ShareRideStore {
   @observable ShareRideAPIStatus
   @observable ShareRideAPIError
   @observable shareRideAPIService
   shareRideService
   constructor(shareRideService) {
      this.shareRideService = shareRideService
      this.init()
   }

   @action.bound
   userRequest(
      from,
      toData,
      date,
      fromDateAndTime,
      toDateAndTime,
      isFlexibleTimings,
      seatsCount,
      assetsQuantity
   ) {
      const requestPromise = this.shareRideService.shareRideAPI(
         from,
         toData,
         date,
         fromDateAndTime,
         toDateAndTime,
         isFlexibleTimings,
         seatsCount,
         assetsQuantity
      )
      return bindPromiseWithOnSuccess(requestPromise)
         .to(this.setShareRideAPIStatus, this.setShareRideAPIResponse)
         .catch(this.setShareRideAPIError)
   }

   @action.bound
   setShareRideAPIResponse(response) {
      setAccessToken(response.access_token)
   }

   @action.bound
   setShareRideAPIError(error) {
      this.getShareRideAPIError = error
   }

   @action.bound
   setShareRideAPIStatus(apiStatus) {
      this.getShareRideAPIStatus = apiStatus
   }

   @action
   init() {
      this.getShareRideAPIStatus = API_INITIAL
      this.getShareRideAPIError = null
   }
}

export { ShareRideStore }
