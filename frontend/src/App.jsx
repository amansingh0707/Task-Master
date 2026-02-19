import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import LandingPage from './pages/LandingPage';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';
import TeamsPage from './pages/TeamsPage';
import Toast from './components/ui/Toast';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <AuthProvider>
        <TaskProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />

              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                      <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 lg:p-8">
                          <div className="max-w-7xl mx-auto">
                            <Dashboard />
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tasks"
                element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                      <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 lg:p-8">
                          <div className="max-w-7xl mx-auto">
                            <TasksPage />
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                      <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 lg:p-8">
                          <div className="max-w-7xl mx-auto">
                            <AnalyticsPage />
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                      <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 lg:p-8">
                          <div className="max-w-7xl mx-auto">
                            <ProfilePage />
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                      <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 lg:p-8">
                          <div className="max-w-7xl mx-auto">
                            <SettingsPage />
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                      <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 lg:p-8">
                          <div className="max-w-7xl mx-auto">
                            <NotificationsPage />
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teams"
                element={
                  <ProtectedRoute>
                    <div className="flex flex-col min-h-screen">
                      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                      <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 lg:p-8">
                          <div className="max-w-7xl mx-auto">
                            <TeamsPage />
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </div>
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Toast />
          </div>
        </TaskProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
