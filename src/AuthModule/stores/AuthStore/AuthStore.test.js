/* global expect,jest*/
import {
   API_INITIAL,
   API_FAILED,
   API_FETCHING,
   API_SUCCESS
}
from '@ib/api-constants';

import AuthService from '../../services/index.api';
import getUsersResponse from '../../fixtures/index.json';
import AuthStore from '.';

describe('AuthStore tests', () => {
   let authService;
   let authStore;

   beforeEach(() => {
      authService = new AuthService();
      authStore = new AuthStore(authService);
   });

   it('should test intialising auth store', () => {
      expect(authStore.getUserLogInAPIStatus).toBe(API_INITIAL);
      expect(authStore.getUserLogInAPIError).toBe(null);
   });

   it('should test userLogInAPI data fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {});
      const mockLogInAPI = jest.fn();
      mockLogInAPI.mockReturnValue(mockLoadingPromise);
      authService.logInAPI = mockLogInAPI;
   });

   it('should test userLogInAPI success state', async() => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUsersResponse);
      });
      const mockLogInAPI = jest.fn();
      mockLogInAPI.mockReturnValue(mockSuccessPromise);
      authService.logInAPI = mockLogInAPI;

      await authStore.userLogIn();
      expect(authStore.getUserLogInAPIStatus).toBe(API_SUCCESS);
   });

   it('should test userLogInAPI failure state', async() => {
      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(getUsersResponse);
      }).catch(() => {});
      const mockLogInAPI = jest.fn();
      mockLogInAPI.mockReturnValue(mockFailurePromise);
      authService.logInAPI = mockLogInAPI;

      mockFailurePromise.catch(e => {
         expect(authStore.getUserLogInAPIStatus).toBe(API_FAILED);
         expect(authStore.getUserLogInAPIError).toBe('error');
      });
   });
});
