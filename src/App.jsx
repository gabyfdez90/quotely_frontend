import { useState } from 'react'
import './App.css'
import GeneralButton from './components/atoms/generalButton/GeneralButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <GeneralButton buttonType="secundary" text="Back" />
    </div>
  )
}

export default App
