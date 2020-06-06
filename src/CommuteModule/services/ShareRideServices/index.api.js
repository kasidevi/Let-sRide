import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class ShareRideService {
   apiMethods
   constructor() {
      this.api = create({
         baseURL: 'https://9e243b1e341a.ngrok.io'
      })
   }

   shareRideAPI(
      from,
      toData,
      date,
      fromDateAndTime,
      toDateAndTime,
      isFlexibleTimings,
      seatsCount,
      assetsQuantity
   ) {
      const details = {
         source: from,
         destination: toData,
         date_time: date,
         from_date_time: fromDateAndTime,
         to_date_time: toDateAndTime,
         is_flexible: isFlexibleTimings,
         no_of_seats_available: seatsCount,
         assets_quantity: assetsQuantity
      }

      return networkCallWithApisauce(
         this.api,
         '/api/lets_ride/share/ride/v1/',
         details,
         apiMethods.post
      )

   }
}

export default ShareRideService
