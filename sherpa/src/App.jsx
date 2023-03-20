import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
