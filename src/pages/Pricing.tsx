import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingPlan } from '../types';

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$60',
      period: '/month',
      description: 'Perfect for small dental practices getting started with AI automation',
      features: [
        'AI Chatbot with basic responses',
        'Up to 500 conversations/month',
        'Basic appointment booking',
        'Email support',
        'Standard FAQ database',
        'Basic analytics',
        'Website integration'
      ]
    },
    {
      name: 'Professional',
      price: '$150',
      period: '/month',
      description: 'Advanced features for growing practices that want comprehensive automation',
      features: [
        'Advanced AI with RAG technology',
        'Up to 2,000 conversations/month',
        'Smart appointment booking with preferences',
        'Priority phone & email support',
        'Custom FAQ training',
        'Advanced analytics & reporting',
        'Multi-platform integration',
        'Lead scoring & CRM integration',
        'Custom branding',
        'Voice integration',
        'Automated follow-ups'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large practices and dental groups with custom needs',
      features: [
        'Everything in Professional',
        'Unlimited conversations',
        'Custom AI model training',
        'Dedicated account manager',
        'White-label solution',
        'Custom integrations',
        'Advanced security features',
        'Multi-location support',
        'API access',
        'Custom reporting',
        'SLA guarantee'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees! We include onboarding and training as part of all our plans.'
    },
    {
      question: 'What happens if I exceed my conversation limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or purchase additional conversations.'
    },
    {
      question: 'What types of businesses can benefit from Novatos AI solutions?',
      answer: 'Our AI solutions are designed for businesses of all sizes across various industries including e-commerce, healthcare, finance, real estate, hospitality, and professional services. Whether youre a startup looking to automate customer support or an enterprise seeking to optimize complex workflows, we have tailored solutions for your needs.'
    },
    {
      question: 'How long does it take to implement an AI solution?',
      answer: 'Implementation timelines vary based on complexity. Simple chatbot integrations can be deployed within 1-2 weeks, while comprehensive automation workflows may take 4-8 weeks. We provide detailed project timelines during our discovery call and keep you updated throughout the process.'
    },
    {
      question: 'Do I need technical knowledge to use your AI solutions?',
      answer: 'Not at all! Our solutions are designed to be user-friendly and require no technical expertise. We provide comprehensive training, documentation, and ongoing support to ensure you can leverage the full potential of your AI implementation.'
    },
    {
      question: 'Can your AI solutions integrate with my existing systems?',
      answer: 'Yes, our AI solutions are built to integrate seamlessly with popular platforms like CRM systems, e-commerce platforms, social media, email marketing tools, and more. We conduct a thorough analysis of your current tech stack to ensure smooth integration'
    },
    {
      question: 'What kind of ROI can I expect from AI automation?',
      answer: 'Our clients typically see 30-70% reduction in operational costs, 50% faster response times, and 40% increase in customer satisfaction within the first 6 months. Specific ROI varies based on your business model and implementation scope.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Absolutely! We offer comprehensive support packages including regular updates, performance monitoring, troubleshooting, and optimization. Our team is available to ensure your AI solutions continue to deliver optimal results as your business grows.'
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. Enjoy a 14-day free trial—no credit card needed.
          </p>
          <div className="inline-flex items-center bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            14-day free trial • No setup fees • Cancel anytime
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${plan.highlighted
                    ? 'ring-2 ring-primary-500 transform scale-105'
                    : 'border border-gray-200 dark:border-gray-700'
                  }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${plan.highlighted
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-900 dark:text-white font-semibold">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 text-gray-900 dark:text-white font-semibold">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 text-gray-900 dark:text-white font-semibold">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 text-gray-900 dark:text-white font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  ['Monthly Conversations', '500', '2,000', 'Unlimited'],
                  ['AI Response Quality', 'Basic', 'Advanced RAG', 'Custom AI'],
                  ['Appointment Booking', 'Basic', 'Smart Booking', 'Advanced + Preferences'],
                  ['Support', 'Email', 'Phone + Email', 'Dedicated Manager'],
                  ['Custom Branding', 'N/A', 'Include', 'Include'],
                  ['Multi-location', 'N/A', 'N/A', 'Include'],
                  ['API Access', 'N/A', 'N/A', 'Include']
                ].map(([feature, starter, pro, enterprise], index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">
                      {feature}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                      {starter}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                      {pro}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                      {enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of businesses already using AI to grow, streamline, and scale their operations.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}