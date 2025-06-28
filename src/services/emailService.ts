import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'hBWFGVuAN5c_GNP7C'; // You'll need to get this from EmailJS
const EMAILJS_SERVICE_ID = 'service_71tja7b';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_2ivkals'; // You'll need to create this template
const EMAILJS_TEMPLATE_ID_BOOKING = 'template_73tadyq'//ll need to create this template

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For now, we'll simulate email sending since you need to set up EmailJS templates
    console.log('Contact form submission:', formData);
    
    // Uncomment and configure when EmailJS is fully set up:
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'ainovatos@gmail.com',
      subject: 'New Contact Form Submission - Novatos AI'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );
    

    // Simulate successful email sending
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
};

export const sendBookingEmail = async (bookingData: BookingFormData): Promise<boolean> => {
  try {
    // For now, we'll simulate email sending since you need to set up EmailJS templates
    console.log('Booking form submission:', bookingData);
    
    // Uncomment and configure when EmailJS is fully set up:
    
    const templateParams = {
      client_name: bookingData.name,
      client_email: bookingData.email,
      client_phone: bookingData.phone,
      service_type: bookingData.service,
      appointment_date: bookingData.date,
      appointment_time: bookingData.time,
      to_email: 'ainovatos@gmail.com',
      subject: 'New Appointment Booking via AI Chatbot'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_BOOKING,
      templateParams
    );
    

    // Simulate successful email sending
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  } catch (error) {
    console.error('Error sending booking email:', error);
    return false;
  }
};