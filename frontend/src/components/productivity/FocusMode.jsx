import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Coffee, Zap, Target } from 'lucide-react';

const FocusMode = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('focus'); // focus, short-break, long-break
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  const modes = {
    focus: { duration: 25 * 60, label: 'Focus Time', color: 'from-red-500 to-orange-500', icon: Zap },
    'short-break': { duration: 5 * 60, label: 'Short Break', color: 'from-green-500 to-teal-500', icon: Coffee },
    'long-break': { duration: 15 * 60, label: 'Long Break', color: 'from-blue-500 to-purple-500', icon: Target },
  };

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleSessionComplete();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleSessionComplete = () => {
    setIsRunning(false);
    if (mode === 'focus') {
      setSessionsCompleted(prev => prev + 1);
      // Play notification sound (would need audio implementation)
      alert('Focus session completed! Time for a break!');
    } else {
      alert('Break time over! Ready for another focus session?');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTimeLeft(modes[newMode].duration);
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(modes[mode].duration);
    setIsRunning(false);
  };

  const progress = ((modes[mode].duration - timeLeft) / modes[mode].duration) * 100;

  const ModeIcon = modes[mode].icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Card */}
        <div className={`card p-8 bg-gradient-to-br ${modes[mode].color} text-white`}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <ModeIcon className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-black mb-2">{modes[mode].label}</h2>
            <p className="text-white/80">
              {sessionsCompleted} {sessionsCompleted === 1 ? 'session' : 'sessions'} completed today
            </p>
          </div>

          {/* Timer Display */}
          <div className="relative mb-8">
            <svg className="w-64 h-64 mx-auto transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 120}`}
                strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s linear' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-black">{formatTime(timeLeft)}</p>
                <p className="text-lg mt-2 text-white/80">remaining</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={handleReset}
              className="p-4 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-6 bg-white text-gray-900 hover:bg-gray-100 rounded-full shadow-2xl transition-all transform hover:scale-110"
            >
              {isRunning ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center justify-center space-x-4">
            {Object.keys(modes).map((modeKey) => (
              <button
                key={modeKey}
                onClick={() => handleModeChange(modeKey)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  mode === modeKey
                    ? 'bg-white text-gray-900 shadow-xl'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {modes[modeKey].label.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-white/90 text-center">
              💡 <strong>Pro Tip:</strong> Eliminate distractions and focus on one task at a time for maximum productivity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusMode;
