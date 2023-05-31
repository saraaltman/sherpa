import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/user/UserProfile';
import MountainListViewPage from './components/mountain/MountainListViewPage';

import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/mountains" element={<MountainListViewPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
