import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute/protectedRoute';
import Upload from './Components/Upload';
import Invoice from './Components/Invoice';
import Schedule from './Components/Schedule';
import Notification from './Components/Notification';
import Settings from './Components/Settings';
import { useEffect, useState } from 'react';
import LandingPage from './Components/LandingPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // const navigate = useNavigate()

  // useEffect(() => {
  //   navigate('/login')
  // },[])

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <GoogleOAuthProvider clientId="1010423947497-d5jr0tfmg2queojpk7sc6e909h198te5.apps.googleusercontent.com">

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/*" element={<UserSection isOpen={isOpen} toggleSidebar={toggleSidebar} />} />
        </Routes>
      </BrowserRouter>
    </div>
    </GoogleOAuthProvider>
  );
}

function UserSection({ isOpen, toggleSidebar }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="dashboard" element={<ProtectedRoute Component={Dashboard} />} />
        <Route path="upload" element={<ProtectedRoute Component={Upload} />} />
        <Route path="invoice" element={<ProtectedRoute Component={Invoice} />} />
        <Route path="schedule" element={<ProtectedRoute Component={Schedule} />} />
        <Route path="notification" element={<ProtectedRoute Component={Notification} />} />
        <Route path="settings" element={<ProtectedRoute Component={Settings} />} />
      </Routes>
    </div>
  );
}

export default App;
