import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class ShareTravelInfoService {
   apiMethods
   constructor() {
      this.api = create({
         baseURL: 'https://9e243b1e341a.ngrok.io'
      })
   }

   shareTravelInfoAPI(
      from,
      toData,
      date,
      fromDateAndTime,
      toDateAndTime,
      isFlexibleTimings,
      selectedMedium,
      assetQuantity
   ) {
      const details = {
         source: from,
         destination: toData,
         date_time: date,
         from_date_time: fromDateAndTime,
         to_date_time: toDateAndTime,
         is_flexible: isFlexibleTimings,
         travel_medium: selectedMedium,
         assets_quantity: assetQuantity
      }

      return networkCallWithApisauce(
         this.api,
         '/api/lets_ride/share/travel_info/v1/',
         details,
         apiMethods.post
      )
   }
}

export default ShareTravelInfoService
