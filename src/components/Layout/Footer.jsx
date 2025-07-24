import React from 'react';
import { TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">LendX</span>
            </div>
            <p className="text-gray-400 max-w-md">
              The secure, transparent way to lend and borrow between peers. 
              Leveraging SAS-issued identity credentials and Solana smart contracts 
              for trustworthy peer-to-peer lending.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2">
              <li><a href="/borrow" className="text-gray-400 hover:text-white transition-colors">Borrow</a></li>
              <li><a href="/lend" className="text-gray-400 hover:text-white transition-colors">Lend</a></li>
              <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400 text-center">
            © 2024 LendX. All rights reserved. Built with Solana blockchain technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;