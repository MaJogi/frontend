import React from 'react'
import ValidationService from '../services/ValidationService'

class ValidationListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validations: [],
    }
  }

  componentDidMount() {
    ValidationService.getValidations().then((response) => {
      this.setState({ validations: response.data })
      console.log('get' + response.data)
    })
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'> Validations List</h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Date and Time</td>
              <td>Identification code</td>
              <td>is_failed</td>
              <td>verdict</td>
            </tr>
          </thead>
          <tbody>
            {this.state.validations.map((validation) => (
              <tr key={validation.id}>
                <td> {new Date(validation.timeStamp).toString()} </td>
                {/* <td> {new Date('6/29/2011 4:52:48 PM UTC').toDateString()} </td> */}
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

export default ValidationListComponent
