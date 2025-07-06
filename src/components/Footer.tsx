import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl flex items-center justify-center shadow-glow">
                  {/* <Brain className="w-6 h-6 text-black" /> */}
                  <motion.img
                                src="/logo.png" // ✅ correct way to use public assets
                                alt="Novatos AI Logo"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="h-10 w-auto rounded-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300"
                              />
                </div>
                <span className="text-2xl font-bold text-white-soft">Novatos AI</span>
              </div>
              <p className="text-white-muted mb-8 max-w-md leading-relaxed">
                Transforming your business with AI-powered automation. 24/7 chatbots, 
                intelligent appointment booking, and seamless support.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/company/novatos-ai/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white-muted hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/novatos_ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white-muted hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white-soft">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Features', path: '/features' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white-muted hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white-soft">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-white-muted group-hover:text-white transition-colors duration-200">
                  hello.novatosai@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-white-muted group-hover:text-white transition-colors duration-200">
                  +92 332 0313358
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-white-muted group-hover:text-white transition-colors duration-200">
                  Karachi, Pakistan
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white-muted text-sm">
            © 2025 Novatos AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white-muted hover:text-primary-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white-muted hover:text-primary-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}