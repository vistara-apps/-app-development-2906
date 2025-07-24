import React from 'react';

const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-soft animate-pulse ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full loading-skeleton"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded loading-skeleton mb-2"></div>
          <div className="h-3 bg-gray-200 rounded loading-skeleton w-2/3"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded loading-skeleton"></div>
        <div className="h-4 bg-gray-200 rounded loading-skeleton w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded loading-skeleton w-4/6"></div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="h-6 bg-gray-200 rounded loading-skeleton w-20"></div>
        <div className="h-8 bg-gray-200 rounded-lg loading-skeleton w-24"></div>
      </div>
    </div>
  );
};

export const SkeletonList = ({ count = 3, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export const SkeletonStats = ({ className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="text-center animate-pulse">
          <div className="h-8 bg-gray-200 rounded loading-skeleton mb-2 mx-auto w-16"></div>
          <div className="h-4 bg-gray-200 rounded loading-skeleton mx-auto w-20"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
