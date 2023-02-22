import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import UserProfile from './components/user/UserProfile';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/profile" element={<UserProfile/>}></Route>
      </Routes>
    </div>
  )
}

export default App
