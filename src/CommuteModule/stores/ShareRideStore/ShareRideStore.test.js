/* global expect,jest*/
import {
    API_INITIAL,
    API_FAILED,
    API_FETCHING,
    API_SUCCESS
}
from '@ib/api-constants'

import ShareRideService from '../../services/ShareRideServices/index.api'
import getUsersResponse from '../../services/ShareRideServices/index.fixtures.json'

import ShareRideStore from '.'

describe('ShareRideStore tests', () => {
    let shareRideService
    let shareRideStore

    beforeEach(() => {
        shareRideService = new ShareRideService()
        shareRideStore = new ShareRideStore(shareRideService)
    })

    it('should test intialising share ride request  store', () => {
        expect(shareRideStore.getShareRideAPIStatus).toBe(API_INITIAL)
        expect(shareRideStore.getShareRideAPIError).toBe(null)
    })

    it('should test share ride data fetching state', () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {})
        const mockShareRideAPI = jest.fn()
        mockShareRideAPI.mockReturnValue(mockLoadingPromise)
        shareRideService.rideRequestAPI = mockShareRideAPI
    })

    it('should test share ride success state', async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getUsersResponse)
        })
        const mockShareRideAPI = jest.fn()
        mockShareRideAPI.mockReturnValue(mockSuccessPromise)
        shareRideService.rideRequestAPI = mockShareRideAPI

        await shareRideStore.userRequest()
        expect(shareRideStore.getShareRideAPIStatus).toBe(API_SUCCESS)
    })

    it('should test share ride failure state', async() => {
        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject()
        }).catch(() => {})
        const mockShareRideAPI = jest.fn()
        mockShareRideAPI.mockReturnValue(mockFailurePromise)
        shareRideService.rideRequestAPI = mockShareRideAPI

        mockFailurePromise.catch(e => {
            expect(shareRideStore.getShareRideAPIStatus).toBe(API_FAILED)
            expect(shareRideStore.getShareRideAPIError).toBe('error')
        })
    })
})
