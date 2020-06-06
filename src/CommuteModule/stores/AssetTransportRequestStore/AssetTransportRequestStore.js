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

class AssetTransportRequestStore {
   @observable AssetTransportRequestAPIStatus
   @observable AssetTransportRequestAPIError
   @observable AssetTransportRequestAPIService
   assetTransportRequestService
   constructor(assetTransportRequestService) {
      this.assetTransportRequestService = assetTransportRequestService
      this.init()
   }

   @action.bound
   userRequest(from, toData, date, fromDateAndTime,
      toDateAndTime, isFlexibleTimings, assetsCount, assetSenstiveType, deliverdData) {
      const requestPromise = this.assetTransportRequestService.assetTransportRequestAPI(from, toData, date, fromDateAndTime,
         toDateAndTime, isFlexibleTimings, assetsCount, assetSenstiveType, deliverdData)
      return bindPromiseWithOnSuccess(requestPromise)
         .to(
            this.setAssetTransportRequestAPIStatus,
            this.setAssetTransportRequestAPIResponse
         )
         .catch(this.setAssetTransportRequestAPIError)
   }

   @action.bound
   setAssetTransportRequestAPIResponse(response) {
      setAccessToken(response.access_token)
   }

   @action.bound
   setAssetTransportRequestAPIError(error) {
      this.getAssetTransportRequestAPIError = error
   }

   @action.bound
   setAssetTransportRequestAPIStatus(apiStatus) {
      this.getAssetTransportRequestAPIStatus = apiStatus
   }

   @action
   init() {
      this.getAssetTransportRequestAPIStatus = API_INITIAL
      this.getAssetTransportRequestAPIError = null
   }
}

export { AssetTransportRequestStore }
