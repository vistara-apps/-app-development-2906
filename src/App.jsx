import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import BorrowPage from './pages/BorrowPage';
import LendPage from './pages/LendPage';
import DashboardPage from './pages/DashboardPage';
import LoanDetailsPage from './pages/LoanDetailsPage';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/borrow" element={<BorrowPage />} />
              <Route path="/lend" element={<LendPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/loan/:id" element={<LoanDetailsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;