import React, { useState } from 'react';
import { TrendingUp, Shield, DollarSign, Clock, User, Star } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { usePaymentContext } from '../hooks/usePaymentContext';

const LendPage = () => {
  const { isConnected } = useUser();
  const { createSession } = usePaymentContext();
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [isInvesting, setIsInvesting] = useState(false);

  // Mock loan data
  const availableLoans = [
    {
      id: 1,
      borrower: 'John Smith',
      amount: 15000,
      purpose: 'Debt Consolidation',
      interestRate: 8.5,
      term: 24,
      creditScore: 750,
      verification: 'SAS Verified',
      description: 'Looking to consolidate high-interest credit cards into a single loan.',
      monthlyPayment: 686.23,
      totalReturn: 16469.52,
      riskLevel: 'Low'
    },
    {
      id: 2,
      borrower: 'Sarah Johnson',
      amount: 8000,
      purpose: 'Home Improvement',
      interestRate: 9.2,
      term: 12,
      creditScore: 720,
      verification: 'SAS Verified',
      description: 'Kitchen renovation project for family home.',
      monthlyPayment: 701.85,
      totalReturn: 8422.20,
      riskLevel: 'Low'
    },
    {
      id: 3,
      borrower: 'Michael Chen',
      amount: 25000,
      purpose: 'Business',
      interestRate: 11.5,
      term: 36,
      creditScore: 680,
      verification: 'SAS Verified',
      description: 'Expanding online retail business inventory.',
      monthlyPayment: 826.79,
      totalReturn: 29764.44,
      riskLevel: 'Medium'
    }
  ];

  const handleInvest = async (loan) => {
    setIsInvesting(true);
    setSelectedLoan(loan);
    try {
      // Calculate platform fee (5% of loan amount)
      const platformFee = (loan.amount * 0.05).toFixed(2);
      await createSession(`$${platformFee}`);
      alert(`Successfully invested in loan for ${loan.borrower}!`);
      setSelectedLoan(null);
    } catch (error) {
      console.error('Investment failed:', error);
      alert('Investment failed. Please try again.');
    } finally {
      setIsInvesting(false);
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isConnected) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Wallet</h2>
          <p className="text-gray-600 mb-8">Please connect your wallet to start lending and earning returns.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lending Opportunities</h1>
        <p className="text-gray-600">Invest in verified borrowers and earn competitive returns</p>
      </div>

      {/* Lending Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Average Returns</p>
              <p className="text-2xl font-bold text-gray-900">9.2%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Default Rate</p>
              <p className="text-2xl font-bold text-gray-900">1.5%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-primary-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Min. Investment</p>
              <p className="text-2xl font-bold text-gray-900">$500</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <User className="h-8 w-8 text-purple-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Active Loans</p>
              <p className="text-2xl font-bold text-gray-900">{availableLoans.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Loans */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {availableLoans.map((loan) => (
          <div key={loan.id} className="bg-white p-6 rounded-lg border border-gray-200 card-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{loan.borrower}</h3>
                <p className="text-sm text-gray-600">{loan.purpose}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(loan.riskLevel)}`}>
                {loan.riskLevel} Risk
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Loan Amount:</span>
                <span className="font-medium">${loan.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Interest Rate:</span>
                <span className="font-medium text-green-600">{loan.interestRate}% APR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Term:</span>
                <span className="font-medium">{loan.term} months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Monthly Payment:</span>
                <span className="font-medium">${loan.monthlyPayment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Return:</span>
                <span className="font-medium text-green-600">${loan.totalReturn.toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-4">
              <div className="flex items-center mb-2">
                <Shield className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">{loan.verification}</span>
              </div>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span className="text-sm text-gray-600">Credit Score: {loan.creditScore}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{loan.description}</p>

            <button
              onClick={() => handleInvest(loan)}
              disabled={isInvesting}
              className="w-full btn-primary disabled:opacity-50"
            >
              {isInvesting && selectedLoan?.id === loan.id ? 'Processing...' : 'Invest Now'}
            </button>
          </div>
        ))}
      </div>

      {/* How Lending Works */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Lending Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <User className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Choose Verified Borrowers</h3>
            <p className="text-gray-600">Browse SAS-verified borrowers with detailed credit profiles and loan purposes.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fund Loans</h3>
            <p className="text-gray-600">Invest in loans that match your risk tolerance and expected returns.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Earn Returns</h3>
            <p className="text-gray-600">Receive monthly payments automatically through Solana smart contracts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendPage;