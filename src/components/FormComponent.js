import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import '../componentStyles/formStyle.css'
import '../bootstrap.min.css'
import ValidationServiceOriginal from '../services/ValidationServiceOriginal'
import { useState } from 'react'

const FormComponent = ({ setValidations, validations }) => {
  const schema = yup.object().shape({
    idCode: yup.string().min(11).max(11).required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const [validationResult, setValidationResult] = useState('')
  const onSubmitHandler = (data) => {
    ValidationServiceOriginal.processIdCode(data).then((response) => {
      setValidationResult(response.data.verdict)
      const x = [...validations, response.data]
      setValidations(x)
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
          <p>{validationResult}</p>
          <br />
          <small id='help' className='form-text text-muted'>
            Don't forget to refresh to see latest information
          </small>
        </div>
        <button type='submit' className='btn btn-primary'>
          Validate
        </button>
      </form>
    </div>
  )
}

export default FormComponent
