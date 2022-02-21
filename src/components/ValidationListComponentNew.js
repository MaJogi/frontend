import { useEffect, useState } from 'react'
import ValidationService from '../services/ValidationService'

const ValidationListComponentNew = ({ setValidations, validations }) => {
  useEffect(() => {
    ValidationService.getValidations().then((response) => {
      setValidations(response.data)
      console.log('get' + response.data)
    })
  }, [])

  return (
    <div className='container'>
      <h1 className='text-center'> List of validation results</h1>
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
