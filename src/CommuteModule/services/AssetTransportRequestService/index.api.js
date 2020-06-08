import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class AssetTransportRequestService {
   apiMethods
   constructor() {
      this.api = create({
         baseURL: 'https://29caf2603e8f.ngrok.io'
      })
   }

   assetTransportRequestAPI(from, toData, date, fromDateAndTime,
      toDateAndTime, isFlexibleTimings, assetsCount, assetSenstiveType, deliverdData) {

      const details = {
         source: from,
         destination: toData,
         date_time: date,
         from_date_time: fromDateAndTime,
         to_date_time: toDateAndTime,
         is_flexible: isFlexibleTimings,
         assets_quantity: assetsCount,
         asset_type: assetSenstiveType,
         whom_to_deliver_details: deliverdData
      }

      return networkCallWithApisauce(
         this.api,
         '/api/lets_ride/request/asset/v1/',
         details,
         apiMethods.post
      )
   }
}

export default AssetTransportRequestService
