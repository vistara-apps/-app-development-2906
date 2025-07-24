import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Users, ArrowUp, ArrowDown } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const DashboardPage = () => {
  const { user, isConnected, creditScore } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isConnected) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Wallet</h2>
          <p className="text-gray-600">Please connect your wallet to view your dashboard.</p>
        </div>
      </div>
    );
  }

  // Mock data for demonstration
  const userStats = {
    totalBorrowed: 25000,
    totalLent: 75000,
    activeLoans: 3,
    completedLoans: 7,
    totalEarnings: 8420,
    currentEarnings: 1250
  };

  const activeLoans = [
    {
      id: 1,
      type: 'borrowed',
      amount: 15000,
      purpose: 'Home Improvement',
      interestRate: 8.5,
      term: 24,
      remaining: 18,
      monthlyPayment: 686.23,
      nextPayment: '2024-02-15'
    },
    {
      id: 2,
      type: 'lent',
      borrower: 'Sarah Johnson',
      amount: 10000,
      purpose: 'Business',
      interestRate: 9.2,
      term: 12,
      remaining: 8,
      monthlyReturn: 876.45,
      nextPayment: '2024-02-10'
    },
    {
      id: 3,
      type: 'lent',
      borrower: 'Michael Chen',
      amount: 20000,
      purpose: 'Debt Consolidation',
      interestRate: 7.8,
      term: 36,
      remaining: 32,
      monthlyReturn: 623.78,
      nextPayment: '2024-02-12'
    }
  ];

  const recentTransactions = [
    { id: 1, type: 'payment_received', amount: 876.45, date: '2024-01-10', description: 'Monthly payment from Sarah Johnson' },
    { id: 2, type: 'payment_made', amount: 686.23, date: '2024-01-15', description: 'Monthly loan payment' },
    { id: 3, type: 'investment', amount: 20000, date: '2024-01-05', description: 'New loan investment to Michael Chen' },
    { id: 4, type: 'payment_received', amount: 623.78, date: '2024-01-12', description: 'Monthly payment from Michael Chen' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'loans', name: 'Active Loans' },
    { id: 'transactions', name: 'Transactions' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.name}</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Borrowed</p>
                  <p className="text-2xl font-bold text-gray-900">${userStats.totalBorrowed.toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Lent</p>
                  <p className="text-2xl font-bold text-gray-900">${userStats.totalLent.toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Active Loans</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.activeLoans}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-900">${userStats.totalEarnings.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Score Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Profile</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Credit Score</p>
                <p className="text-3xl font-bold text-green-600">{creditScore}</p>
                <p className="text-sm text-green-600">Excellent</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Verification Status</p>
                <p className="text-sm font-medium text-green-600">SAS Verified</p>
                <p className="text-xs text-gray-500">Last updated: Today</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'loans' && (
        <div className="space-y-6">
          {activeLoans.map((loan) => (
            <div key={loan.id} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    loan.type === 'borrowed' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {loan.type === 'borrowed' ? 'Borrowed' : 'Lent'}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {loan.type === 'borrowed' ? loan.purpose : `Loan to ${loan.borrower}`}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">${loan.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{loan.interestRate}% APR</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">
                    {loan.type === 'borrowed' ? 'Monthly Payment' : 'Monthly Return'}
                  </p>
                  <p className="font-semibold text-gray-900">
                    ${loan.type === 'borrowed' ? loan.monthlyPayment : loan.monthlyReturn}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Remaining Payments</p>
                  <p className="font-semibold text-gray-900">{loan.remaining} of {loan.term}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Next Payment</p>
                  <p className="font-semibold text-gray-900">{loan.nextPayment}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full" 
                    style={{ width: `${((loan.term - loan.remaining) / loan.term) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {Math.round(((loan.term - loan.remaining) / loan.term) * 100)}% complete
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'transactions' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  {transaction.type === 'payment_received' && (
                    <ArrowUp className="h-8 w-8 text-green-500 mr-3" />
                  )}
                  {transaction.type === 'payment_made' && (
                    <ArrowDown className="h-8 w-8 text-red-500 mr-3" />
                  )}
                  {transaction.type === 'investment' && (
                    <TrendingUp className="h-8 w-8 text-blue-500 mr-3" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-semibold ${
                    transaction.type === 'payment_received' ? 'text-green-600' : 
                    transaction.type === 'payment_made' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {transaction.type === 'payment_made' ? '-' : '+'}${transaction.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;