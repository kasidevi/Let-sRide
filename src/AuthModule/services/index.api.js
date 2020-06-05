import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

class AuthService {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://f5d8ce6deab9.ngrok.io'
      });
   }

   logInAPI(mobileNumber, password) {
      const details = {
         mobile_number: mobileNumber,
         password: password
      };

      return networkCallWithApisauce(
         this.api,
         '/api/lets_ride/LogIn/v1/', details,
         apiMethods.post
      );
   }
}

export default AuthService;
