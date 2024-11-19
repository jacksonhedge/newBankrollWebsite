import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase/config.js';
import { UserCircle, Shield, Heart, ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AnimatedGradientBackground from '../ui/AnimatedGradientBackground.jsx';
import { useAuth } from '../../contexts/AuthContext';

// ... (rest of the imports and ProgressBar component)
const ProgressBar = ({ currentStep }) => {
  return (
    <div className="w-full max-w-2xl px-4 mb-12">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute h-0.5 bg-gray-700 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0" />
        <div 
          className="absolute h-0.5 bg-green-500 left-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 z-0"
          style={{ width: `${(currentStep - 1) * 50}%` }}
        />
        
        {/* Steps */}
        <div className="relative flex flex-col items-center z-10">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
            ${currentStep >= 1 ? 'bg-green-500 border-green-500' : 'bg-gray-800/50 border-gray-700'}
            transition-all duration-300`}
          >
            <UserCircle className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-sm font-medium text-white">Basic info</span>
        </div>
        
        <div className="relative flex flex-col items-center z-10">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
            ${currentStep >= 2 ? 'bg-green-500 border-green-500' : 'bg-gray-800/50 border-gray-700'}
            transition-all duration-300`}
          >
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-sm font-medium text-white">Verification</span>
        </div>
        
        <div className="relative flex flex-col items-center z-10">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
            ${currentStep === 3 ? 'bg-green-500 border-green-500' : 'bg-gray-800/50 border-gray-700'}
            transition-all duration-300`}
          >
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-sm font-medium text-white">You're in!</span>
        </div>
      </div>
    </div>
  );
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    username: '',
    birthday: '',
    phoneNumber: '',
    venmoUsername: '',
    sleeperUsername: '',
    referrer: '',
    acceptTerms: false,
    acceptDwolla: false
  });
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  // ... (rest of the component code remains unchanged until the return statement)

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8 text-white relative">
      <AnimatedGradientBackground />
      
      {/* Logo */}
      <div className="w-full max-w-md px-4 mb-8">
        <img
          src="/newBankrollWebsite/assets/Bankroll%20Gradient%203.jpg"
          alt="Bankroll"
          className="h-20 w-auto mx-auto"
        />
      </div>

      {/* Rest of the JSX remains unchanged */}
      <div className="w-full max-w-md px-4">
        <div className="backdrop-blur-md bg-gray-900/40 p-8 rounded-xl border border-purple-500/20 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            {page > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center text-purple-200 hover:text-green-400 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
            )}
            <h2 className="text-2xl font-bold text-center flex-grow">
              Create your account {page > 1 ? '(2/2)' : '(1/2)'}
            </h2>
          </div>

          <form onSubmit={page === 1 ? handleNext : handleSubmit} className="space-y-6">
            {page === 1 ? (
              <>
                {renderField('email', 'Email address', 'email')}
                <div className="grid grid-cols-2 gap-4">
                  {renderField('firstName', 'First Name')}
                  {renderField('lastName', 'Last Name')}
                </div>
                {renderField('password', 'Password', 'password')}
                {renderField('confirmPassword', 'Confirm Password', 'password')}
              </>
            ) : (
              <>
                {renderField('username', 'Username')}
                {renderField('birthday', 'Birthday (MM/DD/YYYY)', 'date')}
                {renderField('phoneNumber', 'Phone Number', 'tel')}
                {renderField('venmoUsername', 'Venmo Username')}
                {renderField('sleeperUsername', 'Sleeper Username (Optional)', 'text', false)}
                {renderField('referrer', 'Who referred you? (Optional)', 'text', false)}

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 rounded border-purple-500/20 text-green-500 focus:ring-green-500"
                    />
                    <label htmlFor="acceptTerms" className="ml-2 text-sm text-purple-200">
                      I accept the Privacy Policy and Terms of Service*
                    </label>
                  </div>
                  {fieldErrors.acceptTerms && (
                    <div className={errorClass}>{fieldErrors.acceptTerms}</div>
                  )}

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="acceptDwolla"
                      name="acceptDwolla"
                      checked={formData.acceptDwolla}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 rounded border-purple-500/20 text-green-500 focus:ring-green-500"
                    />
                    <label htmlFor="acceptDwolla" className="ml-2 text-sm text-purple-200">
                      I accept being a Dwolla user*
                    </label>
                  </div>
                  {fieldErrors.acceptDwolla && (
                    <div className={errorClass}>{fieldErrors.acceptDwolla}</div>
                  )}
                </div>
              </>
            )}

            {error && (
              <div className="text-red-500 text-sm text-center font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 bg-green-500 text-white rounded-lg 
                transition-all duration-200 transform hover:scale-105 font-medium 
                shadow-lg hover:shadow-green-500/25
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}
                ${error ? 'mt-6' : 'mt-4'}`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </div>
              ) : (
                page === 1 ? 'Next' : 'Complete Sign Up'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-purple-200 hover:text-green-400 transition-colors duration-200"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
