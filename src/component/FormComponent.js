import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import '../componentStyle/formStyle.css'
import '../css/bootstrap.min.css'
import ValidationApi from '../service/ValidationApi'
import { useState } from 'react'

const FormComponent = ({ setValidations, validations }) => {
  const schema = yup.object().shape({
    idCode: yup
      .number()
      .required()
      .test(
        'len',
        'Must be exactly 11 characters',
        (val) => !val || (val && val.toString().length === 11)
      ),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const [validationResult, setValidationResult] = useState('')
  const onSubmitHandler = (data) => {
    ValidationApi.processIdCode(data).then((response) => {
      setValidationResult(response.data.verdict)
      const updatedValidations = [...validations, response.data]
      setValidations(updatedValidations)
    })
    reset()
  }

  return (
    <div className='container mt-5'>
      <form
        method='post'
        action='processIdCode'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <h1>Personal Identity Code validation page</h1>
        <br />

        <div className='form-group'>
          <label>Estonian identification code</label>
          <div class='form-row'>
            <div class='col'>
              <input
                className='form-control'
                {...register('idCode')}
                placeholder='Enter ID code'
                type='text'
                required
              />
            </div>
            <div class='col-auto'>
              <button type='submit' className='btn btn-secondary'>
                Validate
              </button>
            </div>
          </div>
          <p>{errors.idCode?.message}</p>
          <small className='form-text text-muted'>{validationResult}</small>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
