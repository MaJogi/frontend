import './componentStyles/app.css'
import FormComponent from './component/FormComponent'
import ValidationListComponent from './component/ValidationListComponent'
import { useState } from 'react'

const App = () => {
  const [validations, setValidations] = useState([])
  return (
    <div className='App'>
      <header className='App-header'>
        <FormComponent
          setValidations={setValidations}
          validations={validations}
        />
        <hr></hr>
        <ValidationListComponent
          setValidations={setValidations}
          validations={validations}
        />
      </header>
    </div>
  )
}

export default App
