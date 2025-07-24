import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const { address, isConnected } = useAccount();
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [creditScore, setCreditScore] = useState(null);

  useEffect(() => {
    if (isConnected && address) {
      // Simulate user data fetch
      setUser({
        id: address,
        address: address,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        address: '123 Main St, City, State',
        sasCredentials: 'verified',
      });
      setIsVerified(true);
      setCreditScore(750); // Simulated credit score
    } else {
      setUser(null);
      setIsVerified(false);
      setCreditScore(null);
    }
  }, [address, isConnected]);

  const value = {
    user,
    setUser,
    isVerified,
    setIsVerified,
    creditScore,
    setCreditScore,
    isConnected,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};