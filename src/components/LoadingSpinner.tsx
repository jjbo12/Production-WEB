import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Sparkles } from 'lucide-react';

export default function LoadingSpinner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo and brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl flex items-center justify-center shadow-glow"
            >
              <Brain className="w-7 h-7 text-black" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white-soft">
              Novatos AI
            </h1>
          </div>
        </motion.div>

        {/* Loading animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          {/* Circular progress */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="rgba(0, 212, 255, 0.1)"
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={339.292}
                strokeDashoffset={339.292 - (339.292 * progress) / 100}
                transition={{ duration: 0.1 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full flex items-center justify-center shadow-glow"
              >
                <Zap className="w-8 h-8 text-black" />
              </motion.div>
            </div>
          </div>

          {/* Progress text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-500 mb-2">
              {progress}%
            </div>
            <div className="text-white-muted text-lg mb-4">
              Initializing AI Systems...
            </div>
          </motion.div>
        </motion.div>

        {/* Loading steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="space-y-2"
        >
          {[
            { text: "Loading Neural Networks", threshold: 25 },
            { text: "Preparing AI Models", threshold: 50 },
            { text: "Optimizing Performance", threshold: 75 },
            { text: "Ready to Launch", threshold: 100 }
          ].map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-center space-x-2 text-sm transition-all duration-300 ${
                progress >= step.threshold 
                  ? 'text-primary-400' 
                  : 'text-white-muted'
              }`}
            >
              <motion.div
                animate={progress >= step.threshold ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {progress >= step.threshold ? (
                  <Sparkles className="w-4 h-4" />
                ) : (
                  <div className="w-4 h-4 border border-white-muted rounded-full" />
                )}
              </motion.div>
              <span>{step.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}