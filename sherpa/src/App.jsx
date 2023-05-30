import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/user/UserProfile';
import MountainSearchResults from './components/mountain/MountainSearchResults';

import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/mountains" element={<MountainSearchResults />}></Route>
      </Routes>
    </div>
  )
}

export default App
