import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Calendar, MessageSquare, Users, Zap, Shield, Clock, Sparkles, Brain, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';

export default function Home() {
  const features = [
    {
      icon: <Bot className="w-7 h-7" />,
      title: 'AI Chatbots',
      description: 'Smart chatbots trained on your clinic data with advanced RAG technology',
      gradient: 'from-primary-500 to-primary-400',
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: '24/7 Booking',
      description: 'Automated appointment scheduling that never sleeps',
      gradient: 'from-secondary-500 to-secondary-400',
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: 'Support Automation',
      description: 'Instant responses to patient inquiries with 95% accuracy',
      gradient: 'from-accent-500 to-accent-400',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Lead Generation',
      description: 'Capture and convert 3x more leads automatically',
      gradient: 'from-primary-400 to-secondary-500',
    },
  ];

  const stats = [
    { number: '500+', label: 'Clinics Served', icon: <Brain className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
    { number: '95%', label: 'Customer Satisfaction', icon: <Sparkles className="w-6 h-6" /> },
    { number: '3x', label: 'Lead Increase', icon: <Zap className="w-6 h-6" /> },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Setup',
      description: 'Get your AI assistant running in minutes, not weeks. No technical expertise required.',
      gradient: 'from-accent-500 to-accent-400',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security ensuring patient data protection and compliance.',
      gradient: 'from-primary-500 to-primary-400',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Never miss a patient inquiry or appointment request, even after hours.',
      gradient: 'from-secondary-500 to-secondary-400',
    },
  ];

  const handleBookDemo = () => {
    window.open('https://calendly.com/ainovatos/30min', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-400/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-600/15 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/20 to-primary-400/20 border border-primary-500/30 rounded-full text-sm font-medium text-primary-400 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Dental Solutions
              </motion.div>
              
              {/* Main heading */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-6xl md:text-8xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 bg-clip-text text-transparent">
                    Supercharge
                  </span>
                  <br />
                  <span className="text-white-soft">
                    Your Dental
                  </span>
                  <br />
                  <span className="text-white-soft">
                    Clinic
                  </span>
                </motion.h1>
              </div>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl text-white-muted leading-relaxed max-w-2xl"
              >
                Transform patient experience with intelligent chatbots, automated appointment booking, 
                and 24/7 support powered by cutting-edge AI technology.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={handleBookDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-black rounded-xl font-bold text-lg overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Book a Free Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <Link
                  to="/features"
                  className="group px-8 py-4 border-2 border-primary-500/50 text-primary-400 rounded-xl hover:bg-primary-500/10 hover:border-primary-400 transition-all duration-300 font-bold text-lg text-center backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center">
                    View Features
                    <motion.div
                      className="ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
              
              {/* Feature tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center space-x-8 text-sm text-white-muted"
              >
                {[
                  { icon: <Bot className="w-4 h-4" />, text: 'AI Chatbots', color: 'text-accent-400' },
                  { icon: <Users className="w-4 h-4" />, text: 'Lead Capture', color: 'text-primary-400' },
                  { icon: <Clock className="w-4 h-4" />, text: '24/7 Support', color: 'text-secondary-400' },
                ].map((item, index) => (
                  <span key={index} className={`flex items-center space-x-2 ${item.color}`}>
                    {item.icon}
                    <span>{item.text}</span>
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[600px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl backdrop-blur-sm border border-primary-500/20"></div>
              <ThreeScene variant="brain" />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white-muted font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white-soft mb-6">
              Everything Your Clinic
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Needs</span>
            </h2>
            <p className="text-xl text-white-muted max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed specifically for dental practices
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-black-light to-black-lighter border border-white/10 hover:border-primary-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white-soft mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white-muted leading-relaxed group-hover:text-white-soft transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white-soft leading-tight">
                Why Choose
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Novatos AI?</span>
              </h2>
              
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white-soft mb-3 group-hover:text-white transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-white-muted leading-relaxed group-hover:text-white-soft transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[500px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-3xl backdrop-blur-sm border border-secondary-500/20"></div>
              <ThreeScene variant="cubes" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white-soft leading-tight">
              Ready to Transform
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Your Practice?</span>
            </h2>
            <p className="text-xl text-white-muted leading-relaxed max-w-2xl mx-auto">
              Join 500+ dental clinics already using AI to grow their business and delight their patients
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <motion.button
                onClick={handleBookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-black rounded-xl font-bold text-lg overflow-hidden shadow-glow-lg hover:shadow-glow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Free Trial
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <Link
                to="/pricing"
                className="group px-10 py-4 border-2 border-primary-500/50 text-primary-400 rounded-xl hover:bg-primary-500/10 hover:border-primary-400 transition-all duration-300 font-bold text-lg text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  View Pricing
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}