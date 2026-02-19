import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { ArrowRight, Home } from 'lucide-react';
import logo from '../../assets/Task master logo.png';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ level: 0, text: '' });
  const { register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Force dark mode for glassmorphism design
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const calculatePasswordStrength = (password) => {
    if (!password) return { level: 0, text: '' };

    let strength = 0;

    // Length check
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;

    // Character variety checks
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    const levels = [
      { level: 0, text: '' },
      { level: 1, text: 'Weak' },
      { level: 2, text: 'Fair' },
      { level: 3, text: 'Good' },
      { level: 4, text: 'Strong' },
      { level: 5, text: 'Very Strong' },
    ];

    return levels[Math.min(strength, 5)];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update password strength when password changes
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      toast.success('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Get strength color
  const getStrengthColor = () => {
    switch (passwordStrength.level) {
      case 1: return 'from-red-500 to-red-400';
      case 2: return 'from-orange-500 to-yellow-400';
      case 3: return 'from-yellow-500 to-green-400';
      case 4: return 'from-green-500 to-emerald-400';
      case 5: return 'from-primary-500 to-secondary-500';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getStrengthWidth = () => {
    return `${(passwordStrength.level / 5) * 100}%`;
  };

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>

      {/* Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Minimal Top Navigation */}
      <nav className="relative z-10 backdrop-blur-xl border-b border-white/10 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="Task Master"
                className="h-8 w-auto group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
              />
              <span className="text-xl font-bold gradient-text">Task Master</span>
            </Link>

            {/* Back to Home */}
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center px-4 py-12 min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          {/* Frosted Glass Authentication Card */}
          <div className="glass-card p-12 animate-fade-in">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold text-white mb-3">
                Create Your Workspace
              </h1>
              <p className="text-xl text-gray-400">
                Start organizing tasks and tracking progress in one powerful dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  placeholder="Enter Your Full Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  placeholder="At least 6 characters"
                />

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-3 space-y-2 animate-fade-in">
                    {/* Strength Bar */}
                    <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getStrengthColor()} transition-all duration-500 ease-out`}
                        style={{ width: getStrengthWidth() }}
                      ></div>
                    </div>
                    {/* Strength Text */}
                    <p className="text-xs text-gray-400">
                      Strength: <span className={`font-medium ${passwordStrength.level === 1 ? 'text-red-400' :
                        passwordStrength.level === 2 ? 'text-orange-400' :
                          passwordStrength.level === 3 ? 'text-yellow-400' :
                            passwordStrength.level === 4 ? 'text-green-400' :
                              passwordStrength.level === 5 ? 'text-primary-400' :
                                'text-gray-400'
                        }`}>
                        {passwordStrength.text}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-glow transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>{loading ? 'Creating account...' : 'Create Account'}</span>
                  {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
