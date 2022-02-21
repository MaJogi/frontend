import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import '../componentStyles/formStyle.css'
import '../css/bootstrap.min.css'
import ValidationApi from '../service/ValidationApi'
import { useState } from 'react'

const FormComponent = ({ setValidations, validations }) => {
  const schema = yup.object().shape({
    // idCode: yup.string().min(11).max(11).required(),
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
    <div className='container'>
      <form
        method='post'
        action='processIdCode'
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <h2>Please enter Personal Identification Code to validate it</h2>
        <br />
        <div className='form-group'>
          <label>Estonian identification code</label>
          <input
            className='form-control'
            {...register('idCode')}
            placeholder='Enter ID code'
            type='text'
            required
          />
          <p>{errors.idCode?.message}</p>
          <small className='form-text text-muted'>{validationResult}</small>
        </div>
        <button type='submit' className='btn btn-secondary'>
          Validate
        </button>
      </form>
    </div>
  )
}

export default FormComponent
