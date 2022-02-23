import './componentStyle/app.css'
import FormComponent from './component/FormComponent'
import ValidationListComponent from './component/ValidationListComponent'
import { useState } from 'react'
import NavbarComponent from './component/NavbarComponent'

const App = () => {
  const [validations, setValidations] = useState([])
  return (
    <div className='App'>
      <NavbarComponent/>
      <header className='App-header'></header>
      <FormComponent
        setValidations={setValidations}
        validations={validations}
      />
      <ValidationListComponent
        setValidations={setValidations}
        validations={validations}
      />
    </div>
  )
}

export default App
