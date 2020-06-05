import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'

class AssetTransportRequestService {
   apiMethods
   constructor() {
      this.api = create({
         baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api'
      })
   }

   assetTransportRequestAPI() {
      return networkCallWithApisauce(
         this.api,
         '/AssetTransportRequest', {},
         apiMethods.post
      )
   }
}

export default AssetTransportRequestService
