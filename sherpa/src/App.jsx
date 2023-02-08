import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <div className="avatar">
          <div className="w-24 rounded">
            <img className="avatar-image" src="src/assets/skiier.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
