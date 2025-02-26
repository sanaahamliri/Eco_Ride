import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PassagerDashboard from './pages/PassagerDashboard';
import ConducteurDashboard from './pages/ConducteurDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/PassagerPage" 
              element={
                <ProtectedRoute role="passager">
                  <PassagerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ConducteurPage" 
              element={
                <ProtectedRoute role="conducteur">
                  <ConducteurDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;