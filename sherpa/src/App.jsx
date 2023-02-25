import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import UserProfile from './components/user/UserProfile';
import Signup from './components/Signup/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/profile" element={<UserProfile/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default App
