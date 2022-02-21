import { useEffect, useState } from 'react'
import ValidationService from '../services/ValidationService'

const ValidationListComponentNew = ({ setValidations, validations }) => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     validations: [],
  //   }
  // }

  // componentDidMount() {
  //   ValidationService.getValidations().then((response) => {
  //     this.setState({ validations: response.data })
  //     console.log('get' + response.data)
  //   })
  // }

  // const [validations, setValidations] = useState([])

  // useEffect(() => {

  // }, [validations])

  useEffect(() => {
    ValidationService.getValidations().then((response) => {
      setValidations(response.data)
      console.log('get' + response.data)
    })
  }, [])

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
          {validations.map((validation) => (
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

export default ValidationListComponentNew
