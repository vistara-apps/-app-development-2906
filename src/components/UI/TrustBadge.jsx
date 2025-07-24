import React from 'react';
import { Shield, CheckCircle, Lock, Star, Award } from 'lucide-react';

const TrustBadge = ({ type = 'verified', text, className = '' }) => {
  const badges = {
    verified: {
      icon: CheckCircle,
      text: text || 'SAS Verified',
      className: 'trust-badge bg-success-100 text-success-800 border-success-200'
    },
    security: {
      icon: Shield,
      text: text || 'Secure Platform',
      className: 'trust-badge bg-primary-100 text-primary-800 border-primary-200'
    },
    encrypted: {
      icon: Lock,
      text: text || 'End-to-End Encrypted',
      className: 'trust-badge bg-gray-100 text-gray-800 border-gray-200'
    },
    rated: {
      icon: Star,
      text: text || '5-Star Rated',
      className: 'trust-badge bg-warning-100 text-warning-800 border-warning-200'
    },
    certified: {
      icon: Award,
      text: text || 'Certified Platform',
      className: 'trust-badge bg-accent-100 text-accent-800 border-accent-200'
    }
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <span className={`${badge.className} ${className}`}>
      <Icon className="w-3 h-3 mr-1" />
      {badge.text}
    </span>
  );
};

export const SecurityIndicator = ({ level = 'high', className = '' }) => {
  const indicators = {
    high: {
      color: 'text-success-600',
      bgColor: 'bg-success-100',
      text: 'High Security',
      icon: Shield
    },
    medium: {
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
      text: 'Medium Security',
      icon: Shield
    },
    low: {
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      text: 'Basic Security',
      icon: Shield
    }
  };

  const indicator = indicators[level];
  const Icon = indicator.icon;

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${indicator.bgColor} ${indicator.color} ${className}`}>
      <Icon className="w-4 h-4 mr-1" />
      {indicator.text}
    </div>
  );
};

export const CreditScoreBadge = ({ score, className = '' }) => {
  const getScoreColor = (score) => {
    if (score >= 750) return 'bg-success-100 text-success-800 border-success-200';
    if (score >= 650) return 'bg-warning-100 text-warning-800 border-warning-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getScoreLabel = (score) => {
    if (score >= 750) return 'Excellent';
    if (score >= 650) return 'Good';
    return 'Fair';
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getScoreColor(score)} ${className}`}>
      <Star className="w-3 h-3 mr-1" />
      {score} - {getScoreLabel(score)}
    </span>
  );
};

export default TrustBadge;
