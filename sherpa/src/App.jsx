import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
