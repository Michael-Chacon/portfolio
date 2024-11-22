import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ContainerPrincipal } from './ContainerPrincipal'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContainerPrincipal></ContainerPrincipal>
  )
}

export default App
