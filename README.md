# Novatos AI Website

A modern, professional website for Novatos AI - an AI automation company specializing in dental clinic solutions.

## Features

- **AI-Powered Chatbot**: RAG-enabled chatbot trained on website content using Gemini API
- **Email Integration**: Automated email notifications for contact forms and appointment bookings
- **3D Animations**: Interactive 3D elements using Three.js and React Three Fiber
- **Responsive Design**: Mobile-first design with dark/light mode support
- **Modern UI**: Clean, professional design with smooth animations using Framer Motion
- **Calendly Integration**: Direct booking through Calendly for demo appointments

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **AI Integration**: Google Gemini API, LangChain
- **Email Service**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Netlify

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory and add:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_BOOKING_TEMPLATE_ID=your_booking_template_id
```

### 3. EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail recommended)
3. Create two email templates:
   - Contact form template
   - Booking form template
4. Update the template IDs in your environment variables

### 4. Gemini API Setup
1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to your environment variables

### 5. Run Development Server
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
```

## Key Components

- **RAG Service**: Intelligent chatbot responses based on website content
- **Email Service**: Automated email notifications
- **3D Scenes**: Interactive 3D elements for visual appeal
- **Contact Forms**: Integrated with email notifications
- **Responsive Design**: Works on all device sizes

## Contact Information

- **Email**: ainovatos@gmail.com
- **Phone**: +92 (300) 123-4567
- **Location**: Karachi, Pakistan
- **LinkedIn**: [Novatos AI](https://www.linkedin.com/company/novatos-ai/posts/?feedView=all)
- **Instagram**: [@novatos_ai](https://www.instagram.com/novatos_ai/)

## Team

- **Jibran Jalali** - Co-Founder & Management Lead
- **Ayan Humayoun** - Co-Founder & Technical Lead
- **Umer Owais** - Lead Software Engineer
- **Ahsan Zaidi** - Project Manager

## License

© 2025 Novatos AI. All rights reserved.