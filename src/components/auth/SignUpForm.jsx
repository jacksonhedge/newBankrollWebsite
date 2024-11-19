import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase/config.js';
import { UserCircle, Shield, Heart, ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AnimatedGradientBackground from '../ui/AnimatedGradientBackground.jsx';
import { useAuth } from '../../contexts/AuthContext';

// ... (ProgressBar component remains unchanged)
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

  // Validation rules
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
  const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!EMAIL_REGEX.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'firstName':
        if (value.trim().length < 2) {
          return 'First name must be at least 2 characters';
        }
        break;
      case 'lastName':
        if (value.trim().length < 2) {
          return 'Last name must be at least 2 characters';
        }
        break;
      case 'password':
        if (!PASSWORD_REGEX.test(value)) {
          return 'Password must be at least 8 characters and contain one uppercase letter, one number, and one special character';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          return 'Passwords do not match';
        }
        break;
      case 'username':
        if (!value) {
          return 'Username is required';
        }
        if (value.length < 3) {
          return 'Username must be at least 3 characters long';
        }
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          return 'Username can only contain letters, numbers, and underscores';
        }
        if (value.length > 30) {
          return 'Username must be less than 30 characters';
        }
        break;
      case 'sleeperUsername':
        if (value && value.length > 0) {
          if (!value.startsWith('@')) {
            return 'Sleeper username must start with @';
          }
          if (value.length < 2) {
            return 'Please enter a valid Sleeper username';
          }
          if (value.length > 30) {
            return 'Sleeper username must be less than 30 characters';
          }
          if (!/^@[a-zA-Z0-9_]+$/.test(value)) {
            return 'Sleeper username can only contain letters, numbers, and underscores after the @';
          }
        }
        break;
      case 'birthday': {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        
        if (age < 18) {
          return 'You must be at least 18 years old';
        }
        if (age > 100) {
          return 'Please enter a valid birth date';
        }
        break;
      }
      case 'phoneNumber':
        if (!PHONE_REGEX.test(value)) {
          return 'Please enter a valid phone number (e.g., 123-456-7890)';
        }
        break;
      case 'venmoUsername':
        if (!value) {
          return 'Venmo username is required';
        }
        if (!value.startsWith('@')) {
          return 'Venmo username must start with @';
        }
        if (value.length < 2) {
          return 'Please enter a valid Venmo username';
        }
        if (value.length > 30) {
          return 'Venmo username must be less than 30 characters';
        }
        if (!/^@[a-zA-Z0-9_]+$/.test(value)) {
          return 'Venmo username can only contain letters, numbers, and underscores after the @';
        }
        break;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (name === 'password' && formData.confirmPassword) {
      const confirmError = formData.confirmPassword !== value ? 'Passwords do not match' : '';
      setFieldErrors(prev => ({
        ...prev,
        confirmPassword: confirmError
      }));
    }
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phoneNumber: formatted
    }));
  };

  const validatePage1 = () => {
    const errors = {};
    
    ['email', 'firstName', 'lastName', 'password', 'confirmPassword'].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePage2 = () => {
    const errors = {};
    
    ['username', 'birthday', 'phoneNumber', 'venmoUsername'].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });

    // Only validate sleeperUsername if it's not empty
    if (formData.sleeperUsername) {
      const sleeperError = validateField('sleeperUsername', formData.sleeperUsername);
      if (sleeperError) errors.sleeperUsername = sleeperError;
    }

    if (!formData.acceptTerms) {
      errors.acceptTerms = 'You must accept the terms and conditions';
    }
    if (!formData.acceptDwolla) {
      errors.acceptDwolla = 'You must accept being a Dwolla user';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    setError('');
    if (validatePage1()) {
      // Clear page 2 fields when moving to page 2
      setFormData(prev => ({
        ...prev,
        username: '',
        birthday: '',
        phoneNumber: '',
        venmoUsername: '',
        sleeperUsername: '',
        referrer: '',
        acceptTerms: false,
        acceptDwolla: false
      }));
      setPage(2);
    }
  };

  const handleBack = () => {
    setError('');
    // Keep only page 1 data when going back
    setFormData(prev => ({
      ...prev,
      username: '',
      birthday: '',
      phoneNumber: '',
      venmoUsername: '',
      sleeperUsername: '',
      referrer: '',
      acceptTerms: false,
      acceptDwolla: false
    }));
    setPage(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (validatePage2()) {
      setLoading(true);
      try {
        // Generate random profile image number between 1 and 30
        const randomProfileNum = Math.floor(Math.random() * 30) + 1;
        const profileImage = `/images/profile_${randomProfileNum}.png`;

        // Create user with all form data and profile image
        const userData = {
          ...formData,
          profileImage
        };

        await signup(formData.email, formData.password, userData);
        navigate('/platforms');
        
      } catch (error) {
        console.error('Error during sign up:', error);
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('This email is already registered. Please use a different email or try logging in.');
            break;
          case 'auth/invalid-email':
            setError('Invalid email address format.');
            break;
          case 'auth/operation-not-allowed':
            setError('Email/password accounts are not enabled. Please contact support.');
            break;
          case 'auth/weak-password':
            setError('Please choose a stronger password. It should be at least 6 characters long.');
            break;
          default:
            setError('An error occurred during sign up. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const inputClass = "w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white";
  const labelClass = "block text-sm font-medium text-purple-200 mb-2";
  const errorClass = "text-red-500 text-sm mt-1";

  const renderField = (name, label, type = 'text', required = true) => {
    if (name === 'password' || name === 'confirmPassword') {
      const isPassword = name === 'password';
      const showPasswordState = isPassword ? showPassword : showConfirmPassword;
      const togglePasswordVisibility = () => {
        if (isPassword) {
          setShowPassword(!showPassword);
        } else {
          setShowConfirmPassword(!showConfirmPassword);
        }
      };

      return (
        <div>
          <label htmlFor={name} className={labelClass}>
            {label}{required && '*'}
          </label>
          <div className="relative">
            <input
              type={showPasswordState ? 'text' : 'password'}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required={required}
              className={`${inputClass} ${fieldErrors[name] ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-green-400 focus:outline-none"
            >
              {showPasswordState ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {fieldErrors[name] && (
            <div className={errorClass}>{fieldErrors[name]}</div>
          )}
        </div>
      );
    }

    return (
      <div>
        <label htmlFor={name} className={labelClass}>
          {label}{required && '*'}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={name === 'phoneNumber' ? handlePhoneChange : handleChange}
          required={required}
          className={`${inputClass} ${fieldErrors[name] ? 'border-red-500' : ''}`}
        />
        {fieldErrors[name] && (
          <div className={errorClass}>{fieldErrors[name]}</div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8 text-white relative">
      <AnimatedGradientBackground />
      
      {/* Logo */}
      <div className="w-full max-w-md px-4 mb-8">
        <img
          src="/images/Bankroll Gradient 3.jpg"
          alt="Bankroll"
          className="h-20 w-auto mx-auto"
        />
      </div>

      {/* Form Container */}
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
