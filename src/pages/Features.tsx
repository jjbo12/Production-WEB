import React from 'react';
import { Bot, Calendar, MessageSquare, Users, BarChart3, Shield, Clock, Zap, Phone, Mail, CreditCard, Globe } from 'lucide-react';

export default function Features() {
  const mainFeatures = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Chatbot with RAG',
      description: 'Intelligent chatbot trained on your clinic-specific data using Retrieval-Augmented Generation (RAG) technology.',
      features: [
        'Custom training on your FAQ and policies',
        'Natural language understanding',
        'Multi-language support',
        'Contextual responses based on conversation history'
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: '24/7 Appointment Booking',
      description: 'Automated scheduling system that works around the clock to capture appointments.',
      features: [
        'Real-time calendar integration',
        'Automatic confirmation and reminders',
        'Rescheduling and cancellation handling',
        'Waitlist management'
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Automated FAQs',
      description: 'Instant answers to common patient questions with 95% accuracy rate.',
      features: [
        'Pre-built dental FAQ database',
        'Custom FAQ creation and management',
        'Smart escalation to human staff',
        'Continuous learning from interactions'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Lead Collection & CRM',
      description: 'Capture and nurture leads automatically with integrated CRM functionality.',
      features: [
        'Contact form automation',
        'Lead scoring and qualification',
        'Follow-up sequence automation',
        'Integration with popular CRMs'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Reporting',
      description: 'Detailed insights into patient interactions and booking patterns'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security for patient data protection'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-time Notifications',
      description: 'Instant alerts for new appointments and urgent inquiries'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our simple onboarding process'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Voice Integration',
      description: 'Voice-enabled interactions for accessibility'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Automation',
      description: 'Automated email sequences for appointments and follow-ups'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Payment Processing',
      description: 'Secure payment collection for appointments and services'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Platform',
      description: 'Deploy on website, social media, and messaging platforms'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Modern Dental Practices</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to automate patient interactions, streamline operations, and grow your practice with AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Plus Many More Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive functionality designed for dental practice success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience our AI chatbot live - try the floating chat icon on this page!
          </p>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5 min</div>
                <div className="text-white/90">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-white/90">Query Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}