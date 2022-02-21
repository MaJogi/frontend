import logo from './logo.svg'
import './App.css'
import ValidationListComponent from './components/ValidationListComponent'
import FormComponent from './components/FormComponent'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <FormComponent />
        <hr></hr>
        <ValidationListComponent />
      </header>
    </div>
  )
}

export default App
