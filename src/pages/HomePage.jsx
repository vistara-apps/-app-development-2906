import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, TrendingUp, CheckCircle, Lock } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const HomePage = () => {
  const { isConnected } = useUser();

  const features = [
    {
      icon: Shield,
      title: 'SAS-Backed Identity Verification',
      description: 'Seamlessly integrate with SAS data to instantly validate borrower identity and creditworthiness.',
    },
    {
      icon: TrendingUp,
      title: 'Credit Score Integration',
      description: 'Pull borrower credit history data from integrated sources to assess creditworthiness and risk.',
    },
    {
      icon: Zap,
      title: 'Solana Smart Contracts',
      description: 'Leverage the Solana blockchain to automatically manage loan contracts, disbursements, and repayments.',
    },
  ];

  const stats = [
    { value: '$2.5M+', label: 'Loans Facilitated' },
    { value: '1,200+', label: 'Active Users' },
    { value: '98.5%', label: 'Repayment Rate' },
    { value: '5%', label: 'Platform Fee' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Future of <span className="text-blue-200">Peer-to-Peer</span> Lending
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Secure, transparent lending powered by SAS identity verification and Solana blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isConnected ? (
                <>
                  <Link to="/borrow" className="btn-primary bg-white text-primary-600 hover:bg-blue-50">
                    Start Borrowing
                  </Link>
                  <Link to="/lend" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
                    Start Lending
                  </Link>
                </>
              ) : (
                <p className="text-blue-100 text-lg">Connect your wallet to get started</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LendX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with proven financial practices 
              to create the most secure and efficient lending experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl card-shadow">
                <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How LendX Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, secure, and transparent lending process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Borrowers */}
            <div className="bg-white p-8 rounded-xl card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary-600 mr-2" />
                For Borrowers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Connect & Verify</p>
                    <p className="text-gray-600 text-sm">Connect your wallet and verify identity with SAS credentials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Credit Assessment</p>
                    <p className="text-gray-600 text-sm">Get your credit score and loan eligibility assessed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Request Loan</p>
                    <p className="text-gray-600 text-sm">Submit loan request with desired amount and terms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Receive Funds</p>
                    <p className="text-gray-600 text-sm">Get matched with lenders and receive funds via smart contract</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Lenders */}
            <div className="bg-white p-8 rounded-xl card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="h-6 w-6 text-primary-600 mr-2" />
                For Lenders
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Connect Wallet</p>
                    <p className="text-gray-600 text-sm">Connect your wallet and set up payment information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Browse Loans</p>
                    <p className="text-gray-600 text-sm">Review verified borrower profiles and loan requests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Fund Loans</p>
                    <p className="text-gray-600 text-sm">Select loans to fund and initiate payment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Earn Returns</p>
                    <p className="text-gray-600 text-sm">Receive automated repayments with interest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Lending Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust LendX for secure, transparent peer-to-peer lending.
          </p>
          {!isConnected && (
            <p className="text-blue-100 text-lg">
              Connect your wallet to explore all features
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;