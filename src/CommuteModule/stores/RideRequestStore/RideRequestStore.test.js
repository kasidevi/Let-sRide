/* global expect,jest*/
import {
   API_INITIAL,
   API_FAILED,
   API_FETCHING,
   API_SUCCESS
}
from '@ib/api-constants'

import RideRequestService from '../../services/RideRequestServices/index.api'
import getUsersResponse from '../../services/RideRequestServices/index.fixtures.json'
import RideRequestStore from '.'

describe('RideRequestStore tests', () => {
   let rideRequestService
   let rideRequestStore

   beforeEach(() => {
      rideRequestService = new RideRequestService()
      rideRequestStore = new RideRequestStore(rideRequestService)
   })

   it('should test intialising ride request  store', () => {
      expect(rideRequestStore.getRideRequestAPIStatus).toBe(API_INITIAL)
      expect(rideRequestStore.getRideRequestAPIError).toBe(null)
   })

   it('should test ride request data fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockRideRequestAPI = jest.fn()
      mockRideRequestAPI.mockReturnValue(mockLoadingPromise)
      rideRequestService.rideRequestAPI = mockRideRequestAPI
   })

   it('should test ride request success state', async() => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUsersResponse)
      })
      const mockRideRequestAPI = jest.fn()
      mockRideRequestAPI.mockReturnValue(mockSuccessPromise)
      rideRequestService.rideRequestAPI = mockRideRequestAPI

      await rideRequestStore.userRequest()
      expect(rideRequestStore.getRideRequestAPIStatus).toBe(API_SUCCESS)
   })

   it('should test ride request failure state', async() => {
      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(getUsersResponse)
      }).catch(() => {})
      const mockRideRequestAPI = jest.fn()
      mockRideRequestAPI.mockReturnValue(mockFailurePromise)
      rideRequestService.rideRequestAPI = mockRideRequestAPI

      mockFailurePromise.catch(e => {
         expect(rideRequestStore.getRideRequestAPIStatus).toBe(API_FAILED)
         expect(rideRequestStore.getRideRequestAPIError).toBe('error')
      })
   })
})
