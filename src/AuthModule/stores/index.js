import AuthService from '../services/index.api'
import AuthStore from './AuthStore'

const authService = new AuthService()
const authStore = new AuthStore(authService)

export default {
   authStore
}
