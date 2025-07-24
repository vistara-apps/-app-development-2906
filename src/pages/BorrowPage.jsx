import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Shield, TrendingUp, DollarSign, Clock, User, CreditCard, CheckCircle } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { usePaymentContext } from '../hooks/usePaymentContext';
import { LoadingButton } from '../components/UI/LoadingSpinner';
import FormField, { Input, Select } from '../components/UI/FormField';
import TrustBadge, { CreditScoreBadge } from '../components/UI/TrustBadge';

const BorrowPage = () => {
  const { user, isConnected, isVerified, creditScore } = useUser();
  const { createSession } = usePaymentContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loanSubmitted, setLoanSubmitted] = useState(false);
  const [paymentRequired, setPaymentRequired] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const loanAmount = watch('amount');
  const interestRate = watch('interestRate', 8.5);
  const termMonths = watch('term', 12);

  const calculateMonthlyPayment = (principal, rate, months) => {
    const monthlyRate = rate / 100 / 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return payment;
  };

  const platformFee = loanAmount ? (loanAmount * 0.05).toFixed(2) : '0.00';
  const monthlyPayment = loanAmount && termMonths ? calculateMonthlyPayment(loanAmount, interestRate, termMonths).toFixed(2) : '0.00';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate loan processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPaymentRequired(true);
    } catch (error) {
      console.error('Error submitting loan:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePayment = async () => {
    try {
      await createSession(`$${platformFee}`);
      setLoanSubmitted(true);
      setPaymentRequired(false);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  if (!isConnected) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-soft">
            <Shield className="h-12 w-12 text-primary-600" />
          </div>
          <h2 className="text-section-title text-gray-900 mb-4">Connect Your Wallet</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            Please connect your wallet to start the borrowing process and access our secure lending platform.
          </p>
          <div className="flex justify-center gap-3">
            <TrustBadge type="security" />
            <TrustBadge type="encrypted" />
          </div>
        </div>
      </div>
    );
  }

  if (loanSubmitted) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-br from-success-100 to-success-200 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-soft animate-bounce-gentle">
            <CheckCircle className="h-12 w-12 text-success-600" />
          </div>
          <h2 className="text-section-title text-gray-900 mb-4">Loan Request Submitted!</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
            Your loan request has been submitted successfully. You'll be notified when lenders show interest.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-soft border border-success-200 max-w-lg mx-auto mb-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2 text-primary-600" />
              Next Steps
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-0.5" />
                <span className="text-sm text-gray-600">Lenders will review your verified profile</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-warning-500 mt-0.5" />
                <span className="text-sm text-gray-600">You'll receive funding offers within 24-48 hours</span>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-primary-500 mt-0.5" />
                <span className="text-sm text-gray-600">Smart contract will be deployed upon acceptance</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-3">
            <TrustBadge type="verified" text="Request Verified" />
            <TrustBadge type="security" text="Secure Process" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for a Loan</h1>
        <p className="text-gray-600">Get access to competitive rates with verified identity and credit history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Verification Status */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className={`h-5 w-5 mr-3 ${isVerified ? 'text-green-500' : 'text-gray-400'}`} />
                <span className="text-sm">
                  SAS Identity: <span className={isVerified ? 'text-green-600 font-medium' : 'text-gray-500'}>
                    {isVerified ? 'Verified' : 'Pending'}
                  </span>
                </span>
              </div>
              
              <div className="flex items-center">
                <CreditCard className={`h-5 w-5 mr-3 ${creditScore ? 'text-green-500' : 'text-gray-400'}`} />
                <span className="text-sm">
                  Credit Score: <span className={creditScore ? 'text-green-600 font-medium' : 'text-gray-500'}>
                    {creditScore || 'Not Available'}
                  </span>
                </span>
              </div>
              
              <div className="flex items-center">
                <User className="h-5 w-5 mr-3 text-green-500" />
                <span className="text-sm">
                  Wallet: <span className="text-green-600 font-medium">Connected</span>
                </span>
              </div>
            </div>
            
            {creditScore && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  Your excellent credit score qualifies you for our best rates!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Loan Application Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      {...register('amount', { required: 'Loan amount is required', min: 1000, max: 50000 })}
                      className="form-input pl-10"
                      placeholder="Enter amount"
                      min="1000"
                      max="50000"
                    />
                  </div>
                  {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (Months)
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select {...register('term')} className="form-input pl-10">
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose of Loan
                </label>
                <select {...register('purpose')} className="form-input">
                  <option value="debt-consolidation">Debt Consolidation</option>
                  <option value="home-improvement">Home Improvement</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="medical">Medical</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  {...register('description')}
                  className="form-input"
                  rows="3"
                  placeholder="Briefly describe how you'll use the loan"
                />
              </div>

              {/* Loan Summary */}
              {loanAmount && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Loan Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Loan Amount:</span>
                      <span className="font-medium text-gray-900 ml-2">${Number(loanAmount).toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-medium text-gray-900 ml-2">{interestRate}% APR</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Platform Fee (5%):</span>
                      <span className="font-medium text-gray-900 ml-2">${platformFee}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="font-medium text-gray-900 ml-2">${monthlyPayment}</span>
                    </div>
                  </div>
                </div>
              )}

              {paymentRequired ? (
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Required</h3>
                  <p className="text-gray-600 mb-4">
                    Platform fee of ${platformFee} is required to process your loan application.
                  </p>
                  <button
                    type="button"
                    onClick={handlePayment}
                    className="btn-primary"
                  >
                    Pay ${platformFee} to Submit Application
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !isVerified}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Loan Application'}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowPage;
