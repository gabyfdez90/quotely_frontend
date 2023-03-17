import { useState } from 'react'
import './App.css'
import GeneralButton from './components/atoms/generalButton/GeneralButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <GeneralButton buttonType={'secondary'}>Back</GeneralButton>
    </div>
  )
}

export default App
