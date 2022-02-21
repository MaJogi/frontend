import axios from 'axios'

const VALIDATIONS_REST_API_URL_PROCESS_ID =
  'http://localhost:8080/api/processIdCode'
const VALIDATIONS_REST_API_URL_VALIDATIONS =
  'http://localhost:8080/api/validations'

class ValidationServiceOriginal {
  processIdCode(data) {
    return axios.post(VALIDATIONS_REST_API_URL_PROCESS_ID, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    })
  }
  getValidations() {
    return axios.get(VALIDATIONS_REST_API_URL_VALIDATIONS)
  }
}

export default new ValidationServiceOriginal()
