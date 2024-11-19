import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import AnimatedGradientBackground from '../ui/AnimatedGradientBackground.jsx';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const from = location.state?.from?.pathname || '/banking';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData.emailOrUsername, formData.password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      setError(
        error.code === 'auth/invalid-credential'
          ? 'Invalid email/username or password'
          : 'Failed to log in. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8 text-white relative">
      <AnimatedGradientBackground />
      
      {/* Logo */}
      <div className="w-full max-w-md px-4 mb-8">
        <img
          src="/assets/Bankroll Gradient 3.jpg"
          alt="Bankroll"
          className="h-20 w-auto mx-auto"
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md px-4">
        <div className="backdrop-blur-md bg-gray-900/40 p-8 rounded-xl border border-purple-500/20 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            Welcome back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Username Field */}
            <div>
              <label 
                htmlFor="emailOrUsername" 
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Email or Username
              </label>
              <input
                type="text"
                id="emailOrUsername"
                name="emailOrUsername"
                value={formData.emailOrUsername}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                  text-white placeholder-gray-400"
                placeholder="Enter your email or username"
              />
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-purple-500/20 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
                    text-white placeholder-gray-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-200 hover:text-green-400 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center font-medium">
                {error}
              </div>
            )}

            {/* Submit Button */}
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
                  Logging in...
                </div>
              ) : (
                'Log In'
              )}
            </button>

            {/* SMS Consent Text */}
            <p className="text-sm text-gray-400 text-center mt-4">
              By clicking "Log In", you agree to receive SMS text messages to verify your identity
            </p>

            {/* Helper Links */}
            <div className="mt-6 space-y-3">
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => navigate('/forgot-email')}
                  className="text-purple-200 hover:text-green-400 transition-colors text-sm underline"
                >
                  Forgot your email or username?
                </button>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => navigate('/reset-password')}
                  className="text-purple-200 hover:text-green-400 transition-colors text-sm underline"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-purple-200">
                Need to create an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/signup')}
                  className="text-green-400 hover:text-green-300 transition-colors underline"
                >
                  Sign up!
                </button>
              </p>
            </div>

            {/* Legal Footer */}
            <div className="mt-8 text-xs text-gray-400 space-y-4">
              <p>© 2024 Bankroll. All Rights Reserved.</p>
              <p>
                Banking Services provided by The Dwolla Bank, N.A., Member FDIC. The Bankroll Debit Card is issued by 
                The Dwolla Bank, N.A. pursuant to a license from Visa U.S.A. Inc. and may be used everywhere 
                Visa debit cards are accepted. Please see back of your Card for its issuing bank.
              </p>
            </div>
          </form>

          {/* Back to Home Link */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-purple-200 hover:text-green-400 transition-colors duration-200 
                flex items-center justify-center gap-2 mx-auto"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back to home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
