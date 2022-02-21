import './App.css'
//import ValidationListComponent from './components/ValidationListComponent'
import FormComponent from './components/FormComponent'
import ValidationListComponentNew from './components/ValidationListComponentNew'
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
        <ValidationListComponentNew
          setValidations={setValidations}
          validations={validations}
        />
      </header>
    </div>
  )
}

export default App
