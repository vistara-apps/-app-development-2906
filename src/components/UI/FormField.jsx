import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

const FormField = ({ 
  label, 
  error, 
  success, 
  hint, 
  required = false, 
  children, 
  className = '' 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {children}
        
        {/* Success indicator */}
        {success && !error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <CheckCircle className="h-5 w-5 text-success-500" />
          </div>
        )}
        
        {/* Error indicator */}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <div className="form-error flex items-center">
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
      
      {/* Success message */}
      {success && !error && (
        <div className="text-success-600 text-sm mt-1 animate-fade-in flex items-center">
          <CheckCircle className="h-4 w-4 mr-1" />
          {success}
        </div>
      )}
      
      {/* Hint message */}
      {hint && !error && !success && (
        <div className="text-gray-500 text-sm mt-1 flex items-center">
          <Info className="h-4 w-4 mr-1" />
          {hint}
        </div>
      )}
    </div>
  );
};

export const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  success,
  className = '',
  ...props 
}) => {
  const baseClasses = 'form-input';
  const errorClasses = error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : '';
  const successClasses = success && !error ? 'border-success-300 focus:ring-success-500 focus:border-success-500' : '';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${errorClasses} ${successClasses} ${className}`}
      {...props}
    />
  );
};

export const Select = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = 'Select an option',
  error,
  success,
  className = '',
  ...props 
}) => {
  const baseClasses = 'form-input';
  const errorClasses = error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : '';
  const successClasses = success && !error ? 'border-success-300 focus:ring-success-500 focus:border-success-500' : '';
  
  return (
    <select
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${errorClasses} ${successClasses} ${className}`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export const Textarea = ({ 
  placeholder, 
  value, 
  onChange, 
  rows = 4,
  error,
  success,
  className = '',
  ...props 
}) => {
  const baseClasses = 'form-input resize-none';
  const errorClasses = error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : '';
  const successClasses = success && !error ? 'border-success-300 focus:ring-success-500 focus:border-success-500' : '';
  
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`${baseClasses} ${errorClasses} ${successClasses} ${className}`}
      {...props}
    />
  );
};

export default FormField;
