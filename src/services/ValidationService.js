import axios from 'axios'

const VALIDATIONS_REST_API_URL = 'http://localhost:8080/api/validations'

class ValidationService {
  getValidations() {
    return axios.get(VALIDATIONS_REST_API_URL)
  }
} 

export default new ValidationService()
