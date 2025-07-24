import React from 'react';
import { useParams } from 'react-router-dom';
import { Shield, TrendingUp, DollarSign, Clock, User, Calendar } from 'lucide-react';

const LoanDetailsPage = () => {
  const { id } = useParams();

  // Mock loan data - in a real app, this would be fetched based on the ID
  const loanDetails = {
    id: id,
    borrower: 'John Smith',
    amount: 15000,
    purpose: 'Debt Consolidation',
    interestRate: 8.5,
    term: 24,
    remaining: 18,
    creditScore: 750,
    verification: 'SAS Verified',
    description: 'Looking to consolidate high-interest credit cards into a single loan with better terms.',
    monthlyPayment: 686.23,
    totalReturn: 16469.52,
    riskLevel: 'Low',
    startDate: '2023-06-15',
    nextPayment: '2024-02-15',
    contractAddress: '0x742d35Cc6644C2532532Afce29c37379451Fd112',
    paymentHistory: [
      { date: '2024-01-15', amount: 686.23, status: 'paid' },
      { date: '2023-12-15', amount: 686.23, status: 'paid' },
      { date: '2023-11-15', amount: 686.23, status: 'paid' },
      { date: '2023-10-15', amount: 686.23, status: 'paid' },
      { date: '2023-09-15', amount: 686.23, status: 'paid' },
    ]
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Loan Details</h1>
        <p className="text-gray-600">Loan ID: {loanDetails.id}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Loan Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Loan Overview */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Loan Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Borrower</p>
                <p className="font-semibold text-gray-900">{loanDetails.borrower}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Purpose</p>
                <p className="font-semibold text-gray-900">{loanDetails.purpose}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Loan Amount</p>
                <p className="font-semibold text-gray-900">${loanDetails.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Interest Rate</p>
                <p className="font-semibold text-gray-900">{loanDetails.interestRate}% APR</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Term</p>
                <p className="font-semibold text-gray-900">{loanDetails.term} months</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Payment</p>
                <p className="font-semibold text-gray-900">${loanDetails.monthlyPayment}</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">{loanDetails.description}</p>
            </div>
          </div>

          {/* Smart Contract Information */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Smart Contract</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Contract Address</p>
                <p className="font-mono text-sm text-gray-900 break-all">{loanDetails.contractAddress}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Blockchain</p>
                <p className="font-semibold text-gray-900">Solana</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment History</h2>
            <div className="space-y-3">
              {loanDetails.paymentHistory.map((payment, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">{payment.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-900 mr-3">
                      ${payment.amount}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Paid
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Loan Status */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Status</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Verified Borrower</p>
                  <p className="text-xs text-gray-600">{loanDetails.verification}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Credit Score</p>
                  <p className="text-xs text-gray-600">{loanDetails.creditScore}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Next Payment</p>
                  <p className="text-xs text-gray-600">{loanDetails.nextPayment}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Payments Made</span>
                  <span>{loanDetails.term - loanDetails.remaining} / {loanDetails.term}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full" 
                    style={{ width: `${((loanDetails.term - loanDetails.remaining) / loanDetails.term) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <p>Remaining: {loanDetails.remaining} payments</p>
                <p>Expected completion: {new Date(new Date(loanDetails.startDate).getTime() + loanDetails.term * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}</p>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Risk Level:</span>
                <span className="text-sm font-medium text-green-600">{loanDetails.riskLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Payment History:</span>
                <span className="text-sm font-medium text-green-600">100% On Time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Default Risk:</span>
                <span className="text-sm font-medium text-green-600">Very Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsPage;