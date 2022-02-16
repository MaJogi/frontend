import React from 'react'
import ValidationService from '../services/ValidationService'

class ValidationComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validations: [],
    }
  }

  componentDidMount() {
    ValidationService.getValidations().then((response) => {
      this.setState({ validations: response.data })
      console.log(response.data)
    })
  }

  render() {
    return (
      <div>
        <h1 className='text-center'> Validations List</h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Id</td>
              <td>timestamp</td>
              <td>id_code</td>
              <td>is_failed</td>
              <td>verdict</td>
            </tr>
          </thead>
          <tbody>
            {this.state.validations.map((validation) => (
              <tr key={validation.id}>
                <td> {validation.id} </td>
                <td> {validation.timeStamp} </td>
                <td> {validation.idCode} </td>
                <td> {validation.failed.toString()} </td>
                <td> {validation.verdict} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ValidationComponent
