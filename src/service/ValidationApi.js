import axios from 'axios'

const apiUrl = 'http://localhost:8080/api'

const VALIDATIONS_REST_API_URL_PROCESS_ID = apiUrl + '/validation/processIdCode'
const VALIDATIONS_REST_API_URL_VALIDATIONS = apiUrl + '/validation'

class ValidationApi {
  processIdCode(data) {
    return axios.post(VALIDATIONS_REST_API_URL_PROCESS_ID, data)
  }
  getValidations() {
    return axios.get(VALIDATIONS_REST_API_URL_VALIDATIONS)
  }
}

export default new ValidationApi()
