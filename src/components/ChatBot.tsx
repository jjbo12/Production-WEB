import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Calendar, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { flushSync } from 'react-dom';
import { ChatMessage, AppointmentData } from '../types';
import { ragService } from '../services/ragService';
import { sendBookingEmail } from '../services/emailService';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: '1',
    text: "Hi there! 👋 I'm Nova, your virtual assistant from Novatos AI. Want to explore our AI automation services for dental clinics or book a free demo? ✨",
    sender: 'bot',
    timestamp: new Date(),
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, forceRender] = useState(0);

  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    name: '', email: '', phone: '', service: '', date: '', time: '',
  });

  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const detectIntent = (msg: string): string | null => {
    const lowerMsg = msg.toLowerCase();
    if (lowerMsg.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) return 'greeting';
    if (lowerMsg.match(/\b(demo|book|schedule|appointment|meeting|call|consultation)\b/)) return 'booking';
    if (lowerMsg.match(/\b(price|pricing|cost|how much|plans|packages)\b/)) return 'pricing';
    if (lowerMsg.match(/\b(features|what do you do|services|capabilities|ai|chatbot)\b/)) return 'features';
    if (lowerMsg.match(/\b(contact|phone|email|reach|support|help|\?)\b/)) return 'contact';
    if (lowerMsg.match(/\b(ok|thanks|k)\b/)) return 'bye';
    return null;
  };

  const getSmartResponse = (intent: string): string => {
    switch (intent) {
      case 'greeting': return "Hi! How can I assist you today?";
      case 'booking': return "Want to book a free demo? Just say 'book demo' or fill the form.";
      case 'pricing': return "Starter: $199/mo, Pro: $499/mo, Enterprise: Custom. Want more info?";
      case 'features': return "AI chatbot, booking automation, CRM, HIPAA secure. Need details?";
      case 'bye': return "pleasure, if you want any other info you can ask.";
      case 'contact': return "Email: hello.novatosai@gmail.com | Phone: +92 332 0313358";
      default: return '';
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isInputDisabled) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    flushSync(() => {
      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);
      setIsInputDisabled(true);
    });
    setInputValue('');

    try {
      const intent = detectIntent(userMessage.text);
      let response = '';

      if (intent) {
        response = getSmartResponse(intent);
        if (intent === 'booking') setTimeout(() => setShowAppointmentForm(true), 1000);
      } else {
        response = await ragService.generateResponse(userMessage.text);
        if (!response || response.trim().length < 2) {
          response = "I'm not sure how to respond to that. Could you rephrase or ask something else?";
        }
      }

      setTimeout(() => {
        flushSync(() => {
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: response,
            sender: 'bot',
            timestamp: new Date(),
          }]);
          setIsTyping(false);
          setIsInputDisabled(false);
        });
        forceRender(n => n + 1);
      }, 300);

    } catch (err) {
      console.error(err);
      flushSync(() => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: "I'm facing a technical issue. Please email us at hello.novatosai@gmail.com",
          sender: 'bot',
          timestamp: new Date(),
        }]);
        setIsTyping(false);
        setIsInputDisabled(false);
      });
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center z-40 group"
          >
            <MessageCircle className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
            
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-black-light/95 backdrop-blur-xl rounded-2xl shadow-glow-xl border border-primary-500/30 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-500 to-primary-400 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              
              <div className="flex items-center space-x-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                >
                  <Bot className="w-6 h-6 text-black" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-black text-lg">Nova AI Assistant</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-xs text-black/80">Online & Ready to Help</p>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-black/80 hover:text-black transition-colors duration-200 p-2 rounded-lg hover:bg-black/10"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-transparent">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] relative ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-r from-secondary-500 to-secondary-400 ml-auto' 
                          : 'bg-gradient-to-r from-primary-500 to-primary-400'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-black" />
                        ) : (
                          <Bot className="w-4 h-4 text-black" />
                        )}
                      </div>
                      
                      {/* Message bubble */}
                      <div
                        className={`p-4 rounded-2xl relative ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-primary-500 to-primary-400 text-black shadow-glow'
                            : 'bg-black-lighter border border-white/10 text-white-soft shadow-lg'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-2 ${
                          message.sender === 'user' ? 'text-black/70' : 'text-white-muted'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        
                        {/* Message tail */}
                        <div className={`absolute top-4 w-3 h-3 transform rotate-45 ${
                          message.sender === 'user' 
                            ? 'right-[-6px] bg-primary-500' 
                            : 'left-[-6px] bg-black-lighter border-l border-b border-white/10'
                        }`}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-black" />
                      </div>
                      <div className="bg-black-lighter border border-white/10 p-4 rounded-2xl">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-primary-500 rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                delay: i * 0.2 
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div ref={messagesEndRef} />
            </div>

            {/* Appointment Form */}
            <AnimatePresence>
              {showAppointmentForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 border-t border-white/10 bg-black-lighter/50 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <h4 className="font-semibold text-white-soft">Book Your Demo</h4>
                  </div>
                  
                  <form onSubmit={handleAppointmentSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={appointmentData.name}
                        onChange={(e) => setAppointmentData(prev => ({ ...prev, name: e.target.value }))}
                        className="px-3 py-2 text-sm border border-white/20 rounded-lg bg-black/50 text-white placeholder-white-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={appointmentData.email}
                        onChange={(e) => setAppointmentData(prev => ({ ...prev, email: e.target.value }))}
                        className="px-3 py-2 text-sm border border-white/20 rounded-lg bg-black/50 text-white placeholder-white-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={appointmentData.phone}
                      onChange={(e) => setAppointmentData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 text-sm border border-white/20 rounded-lg bg-black/50 text-white placeholder-white-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                    <select
                      value={appointmentData.service}
                      onChange={(e) => setAppointmentData(prev => ({ ...prev, service: e.target.value }))}
                      className="w-full px-3 py-2 text-sm border border-white/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select Service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-black text-white">{service}</option>
                      ))}
                    </select>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        value={appointmentData.date}
                        onChange={(e) => setAppointmentData(prev => ({ ...prev, date: e.target.value }))}
                        className="px-3 py-2 text-sm border border-white/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      <select
                        value={appointmentData.time}
                        onChange={(e) => setAppointmentData(prev => ({ ...prev, time: e.target.value }))}
                        className="px-3 py-2 text-sm border border-white/20 rounded-lg bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time} className="bg-black text-white">{time}</option>
                        ))}
                      </select>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-400 text-black rounded-lg hover:shadow-glow transition-all duration-300 text-sm font-semibold flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Demo</span>
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black-lighter/30 backdrop-blur-sm">
              <div className="flex space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isInputDisabled && handleSendMessage()}
                    placeholder={isInputDisabled ? "Nova is typing..." : "Type your message..."}
                    disabled={isInputDisabled}
                    className="w-full px-4 py-3 border border-white/20 rounded-xl bg-black/50 text-white placeholder-white-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {isInputDisabled && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full"
                      />
                    </div>
                  )}
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isInputDisabled || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-black rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Quick actions */}
              <div className="flex flex-wrap gap-2 mt-3">
                {['Book Demo 📅', 'View Pricing 💰', 'Features 🤖'].map((action) => (
                  <motion.button
                    key={action}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (!isInputDisabled) {
                        setInputValue(action.split(' ')[0] + ' ' + action.split(' ')[1]);
                      }
                    }}
                    disabled={isInputDisabled}
                    className="px-3 py-1 text-xs bg-white/10 text-white-muted rounded-full hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}