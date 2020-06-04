import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils.APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class ShareRideService {
   apiMethods
   constructor() {
      this.api = create({
         baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api'
      })
   }

   ShareRideAPI() {
      return networkCallWithApisauce(
         this.api,
         '/ShareRide',
         {},
         apiMethods.post
      )
   }
}

export default ShareRideService
