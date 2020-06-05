import RideRequestService from '../services/RideRequestServices/index.api'
import ShareRideService from '../services/ShareRideServices/index.api'
import AssetTransportRequestService from '../services/AssetTransportRequestService/index.api'
import ShareTravelInfoService from '../services/ShareTravelInfoService/index.api'

import RideRequestStore from './RideRequestStore'
import ShareRideStore from './ShareRideStore'
import AssetTransportRequestStore from './AssetTransportRequestStore'
import ShareTravelInfoStore from './ShareTravelInfoStore'

const rideRequestService = new RideRequestService()
const rideRequestStore = new RideRequestStore(rideRequestService)

const shareRideService = new ShareRideService()
const shareRideStore = new ShareRideStore(shareRideService)

const assetTransportRequestService = new AssetTransportRequestService()
const assetTransportRequestStore = new AssetTransportRequestStore(
   assetTransportRequestService
)

const shareTravelInfoService = new ShareTravelInfoService()
const shareTravelInfoStore = new ShareTravelInfoStore(shareTravelInfoService)

export default {
   rideRequestStore,
   shareRideStore,
   assetTransportRequestStore,
   shareTravelInfoStore
}
