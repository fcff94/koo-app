import { useState } from 'react'
import './App.scss'
import { CardComponent } from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardComponent/>
    </>
  )
}

export default App
