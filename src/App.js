import './App.css'
//import ValidationListComponent from './components/ValidationListComponent'
import FormComponent from './components/FormComponent'
import ValidationListComponent from './components/ValidationListComponent'
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
