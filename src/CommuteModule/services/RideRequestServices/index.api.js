import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class RideRequestService {
   apiMethods
   constructor() {
      this.api = create({
         baseURL: 'https://9e243b1e341a.ngrok.io'
      })
   }

   rideRequestAPI(
      from,
      toData,
      date,
      fromDateAndTime,
      toDateAndTime,
      isFlexibleTimings,
      seatsCount,
      laguageQuantity
   ) {
      const details = {
         source: from,
         destination: toData,
         date_time: date,
         from_date_time: fromDateAndTime,
         to_date_time: toDateAndTime,
         is_flexible: isFlexibleTimings,
         no_of_seats: seatsCount,
         lugguage_quantity: laguageQuantity
      }
      return networkCallWithApisauce(
         this.api,
         '/api/lets_ride/request/ride/v1/',
         details,
         apiMethods.post
      )
   }
}

export default RideRequestService
