import React from 'react';
import { Bot, Calendar, MessageSquare, Users, BarChart3, Shield, Clock, Zap, Phone, Mail, CreditCard, Globe } from 'lucide-react';
import Pricing from './Pricing';

export default function Features() {
  const mainFeatures = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Chatbot with RAG',
      description: 'Intelligent chatbot trained on your business-specific data using advanced Retrieval-Augmented Generation (RAG) technology.',
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
      description: 'Instant answers to common customer questions with a 95% accuracy rate.',
      features: [
        'Pre-built business FAQ database',
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
      Price: '$19/month',
      description: 'Track leads, chatbot conversations, drop-offs, and frequently asked questions'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Multi-Platform Integration',
      Price: '$29 per channel',
      description: 'Deploy your chatbot on Instagram, WhatsApp, Facebook, or your website'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'CRM & Data Integration',
      Price: '$39 one-time',
      description: 'Automatically send lead data to Google Sheets or CRMs like HubSpot or Pipedrive'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lead Follow-Up',
      Price: '$59 one-time',
      description: 'Automated WhatsApp or email follow-ups 24 hours after new inquiries'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Appointment Reminders',
      Price: 'Included in Nova Pro',
      description: 'Reduce no-shows with automated SMS, WhatsApp, and email reminders before appointments'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'FAQ Brain Pack',
      Price: 'Included in all packages',
      description: 'We preload 15–30 FAQs tailored to your business so your bot sounds intelligent and on-brand'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Voice Assistant',
      Price: 'Custom Quote',
      description: 'AI-powered voice agent to handle inbound calls, qualify leads, or redirect callers'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Quick Setup & Onboarding',
      Price: 'Free with all packages',
      description: 'Get started in minutes with fast, guided chatbot setup and onboarding'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Modern Business Practices</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to automate customer interactions, streamline operations, and grow your business with AI-powered solutions.
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
              Adds on Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive functionality designed for business success
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.Price}
                </h3>
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
                <div className="text-3xl font-bold mb-2">48 min</div>
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