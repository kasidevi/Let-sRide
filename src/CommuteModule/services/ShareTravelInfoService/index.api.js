import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils.APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class ShareTravelInfoService {
   apiMethods
   constructor() {
      this.api = create({
         baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api'
      })
   }

   RideRequestAPI() {
      return networkCallWithApisauce(
         this.api,
         '/ShareTravelInfo',
         {},
         apiMethods.post
      )
   }
}

export default ShareTravelInfoService
