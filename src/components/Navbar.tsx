import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleBookDemo = () => {
    window.open('https://calendly.com/ainovatos/30min', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/logo.png" // ✅ correct way to use public assets
              alt="Novatos AI Logo"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="h-10 w-auto rounded-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300"
            />
            <span className="text-2xl font-bold text-white-soft group-hover:text-white transition-colors duration-300">
              Novatos AI
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.href)
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-white-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-500/20 rounded-lg border border-primary-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden md:block"
          >
            <motion.button
              onClick={handleBookDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-black rounded-xl font-semibold overflow-hidden group shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              <span className="relative z-10">Book Free Demo</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white-muted hover:text-white transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                      isActive(item.href)
                        ? 'text-primary-400 bg-primary-500/10 border border-primary-500/30'
                        : 'text-white-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                onClick={() => {
                  handleBookDemo();
                  setIsOpen(false);
                }}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-black rounded-xl font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                Book Free Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}