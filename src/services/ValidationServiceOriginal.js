import axios from 'axios'

const VALIDATIONS_REST_API_URL = 'http://localhost:8080/api/processIdCode'

class ValidationServiceOriginal {
  processIdCode(data) {
    return axios.post(VALIDATIONS_REST_API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    })
  }
  // getValidations() {
  //   return axios.get(VALIDATIONS_REST_API_URL)
  // }
}

export default new ValidationServiceOriginal()
