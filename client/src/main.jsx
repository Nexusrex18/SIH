import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/Authcontext';

import Dashboard from './components/Buyer/BDashboard';
import Signup from './components/Buyer/Signup';
import Login from './components/Buyer/Login';
import FLogin from './components/Farmer/FLogin';
import FSignup from './components/Farmer/FSignup';
import Chat from './components/Negotiate/Chat';
import NotFoundPage from './components/NotFoundPage';
import FDashboard from './components/Farmer/FDashboard';
import Profilesetup from './components/ProfileSetup/Profilesetup';
import FarmSell from './components/Farmer/FarmSell';
import MultiAgriConnectInteract from './components/Contract/Contract_2';
import FESignup from './components/Farmer/FESignup';
import FELogin from './components/Farmer/FELogin';
import LandingPage from './components/LandingPage/trial';
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buyer" element={<Dashboard />} />
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/fsignup" element={<FSignup/>}/>
        <Route path="/flogin" element={<FLogin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/farmerdashboard" element={<FDashboard/>}/>
        <Route path="/profilesetup" element={<Profilesetup/>}/>
        <Route path="/farmsell" element={<FarmSell/>}/>
        <Route path="/contract" element={<MultiAgriConnectInteract />} />
        <Route path="/farmersignup" element={<FESignup />} />
        <Route path="/farmerlogin" element={<FELogin />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>

);
