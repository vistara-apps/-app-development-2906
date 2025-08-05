import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, TrendingUp, CheckCircle, Lock, Star, Award } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import TrustBadge, { SecurityIndicator } from '../components/UI/TrustBadge';

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
      <section className="gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center animate-fade-in-up">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <TrustBadge type="verified" className="bg-white/20 text-white border-white/30" />
              <TrustBadge type="security" className="bg-white/20 text-white border-white/30" />
              <TrustBadge type="encrypted" className="bg-white/20 text-white border-white/30" />
              <TrustBadge type="rated" className="bg-white/20 text-white border-white/30" />
            </div>
            
            <h1 className="text-hero mb-6 animate-fade-in">
              The Future of <span className="gradient-text bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">Peer-to-Peer</span> Lending
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Secure, transparent lending powered by SAS identity verification and Solana blockchain technology.
            </p>
            
            {/* Security Indicator */}
            <div className="mb-8">
              <SecurityIndicator level="high" className="bg-white/20 text-white border-white/30" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isConnected ? (
                <>
                  <Link to="/borrow" className="btn-primary bg-white text-primary-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
                    <Users className="w-5 h-5 mr-2" />
                    Start Borrowing
                  </Link>
                  <Link to="/lend" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Start Lending
                  </Link>
                </>
              ) : (
                <div className="text-center">
                  <p className="text-blue-100 text-lg mb-4">Connect your wallet to get started</p>
                  <div className="flex justify-center">
                    <div className="animate-bounce-gentle">
                      <Shield className="w-8 h-8 text-blue-200" />
                    </div>
                  </div>
                </div>
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
              <div key={index} className="bg-white p-8 rounded-xl card-shadow card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-soft">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-card-title text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <TrustBadge type="verified" text="Verified Feature" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-gray-900 mb-4">Platform Performance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of users worldwide with industry-leading performance metrics
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 mb-4 group-hover:shadow-medium transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
                {index === 2 && <TrustBadge type="rated" text="Industry Leading" />}
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
