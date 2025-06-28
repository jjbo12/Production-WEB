import { GoogleGenerativeAI } from '@google/generative-ai';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

const GEMINI_API_KEY = 'AIzaSyDbLZhpSHSzcnhexW2yRq0EUrP_FOaowro';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Website content for RAG
const websiteContent = `
Novatos AI - AI-Powered Automation for Dental Clinics

ABOUT US:
Novatos AI is a leading AI automation company specializing in dental practice solutions. We transform dental clinics with AI-powered chatbots, automated appointment booking, and 24/7 customer support. Based in Karachi, Pakistan, we serve over 500 dental practices worldwide.

Our team includes:
- Jibran Jalali: Co-Founder & Management Lead - Strategic leader with extensive experience in business development and AI implementation for healthcare
- Ayan Humayoun: Co-Founder & Technical Lead - AI researcher and technical architect specializing in machine learning and healthcare automation
- Umer Owais: Lead Software Engineer - Full-stack developer with expertise in AI integration and scalable healthcare solutions
- Ahsan Zaidi: Project Manager - Project management specialist ensuring seamless delivery of AI solutions to dental practices

SERVICES:
1. AI Chatbot Development - Custom chatbots trained on your clinic data using RAG technology
2. Appointment Booking Automation - 24/7 automated scheduling with calendar integration
3. Lead Generation System - Automated lead capture and CRM integration
4. Customer Support Automation - Instant responses to patient inquiries
5. Multi-Platform Deployment - Deploy on website, social media, messaging platforms
6. Custom AI Solutions - Tailored AI solutions for specific practice needs

FEATURES:
- AI Chatbot with RAG (Retrieval-Augmented Generation)
- 24/7 Appointment Booking with real-time calendar integration
- Automated FAQ responses with 95% accuracy
- Lead Collection & CRM integration
- HIPAA Compliance and enterprise-grade security
- Analytics & Reporting dashboard
- Voice integration capabilities
- Email automation sequences
- Payment processing integration
- Multi-language support

PRICING:
Starter Plan: $199/month
- AI Chatbot with basic responses
- Up to 500 conversations/month
- Basic appointment booking
- Email support
- Standard FAQ database
- Basic analytics
- Website integration

Professional Plan: $499/month (Most Popular)
- Advanced AI with RAG technology
- Up to 2,000 conversations/month
- Smart appointment booking with preferences
- Priority phone & email support
- Custom FAQ training
- Advanced analytics & reporting
- Multi-platform integration
- Lead scoring & CRM integration
- Custom branding
- Voice integration
- Automated follow-ups

Enterprise Plan: Custom pricing
- Everything in Professional
- Unlimited conversations
- Custom AI model training
- Dedicated account manager
- White-label solution
- Custom integrations
- Advanced security features
- Multi-location support
- API access
- Custom reporting
- SLA guarantee

CONTACT:
Email: ainovatos@gmail.com
Phone: +92 (300) 123-4567
Location: Karachi, Pakistan
LinkedIn: https://www.linkedin.com/company/novatos-ai/posts/?feedView=all
Instagram: https://www.instagram.com/novatos_ai/
Book Demo: https://calendly.com/ainovatos/30min

BENEFITS:
- Increase patient satisfaction with 24/7 support
- Reduce administrative workload by 70%
- Capture 3x more leads with automated systems
- Improve appointment booking efficiency
- HIPAA compliant and secure
- Quick 5-minute setup process
- 95% customer satisfaction rate
- 14-day free trial available

FREQUENTLY ASKED QUESTIONS:
Q: How quickly can we get started?
A: Setup takes just 5 minutes with our simple onboarding process.

Q: Is the system HIPAA compliant?
A: Yes, we maintain enterprise-grade security and HIPAA compliance.

Q: Can the chatbot handle complex dental questions?
A: Our AI is trained specifically on dental practice data and can handle 95% of common inquiries.

Q: Do you offer integration with existing practice management systems?
A: Yes, we integrate with popular dental practice management systems and CRMs.

Q: What kind of support do you provide?
A: We offer email support for Starter, phone + email for Professional, and dedicated account managers for Enterprise.

Q: Can I customize the chatbot for my specific practice?
A: Absolutely! Our Professional and Enterprise plans include custom training on your practice data.

Q: How do I book a demo?
A: You can book a demo directly through our calendar at https://calendly.com/ainovatos/30min or use our chatbot to schedule an appointment.

Q: What makes Novatos AI different from other chatbot providers?
A: We specialize specifically in dental practices, use advanced RAG technology for accurate responses, and provide comprehensive automation beyond just chatbots.
`;

class RAGService {
  private chunks: string[] = [];
  private embeddings: number[][] = [];
  private model: any;

  constructor() {
    this.model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    this.initializeRAG();
  }

  private async initializeRAG() {
    try {
      // Split content into chunks
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });

      this.chunks = await textSplitter.splitText(websiteContent);
      
      // Generate embeddings for each chunk (simplified approach)
      this.embeddings = this.chunks.map(() => this.generateSimpleEmbedding());
      
      console.log('RAG system initialized with', this.chunks.length, 'chunks');
    } catch (error) {
      console.error('Error initializing RAG:', error);
    }
  }

  private generateSimpleEmbedding(): number[] {
    // Simplified embedding generation - in production, use proper embedding models
    return Array.from({ length: 384 }, () => Math.random());
  }

  private findRelevantChunks(query: string, topK: number = 3): string[] {
    // Simplified similarity search - in production, use proper vector similarity
    const queryWords = query.toLowerCase().split(' ');
    
    const chunkScores = this.chunks.map((chunk, index) => {
      const chunkWords = chunk.toLowerCase();
      const score = queryWords.reduce((acc, word) => {
        return acc + (chunkWords.includes(word) ? 1 : 0);
      }, 0);
      return { chunk, score, index };
    });

    return chunkScores
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(item => item.chunk);
  }

  async generateResponse(query: string): Promise<string> {
    try {
      // Find relevant chunks
      const relevantChunks = this.findRelevantChunks(query);
      
      // Create context from relevant chunks
      const context = relevantChunks.join('\n\n');
      
      // Generate response using Gemini with context
      const prompt = `
You are an AI assistant for Novatos AI, a company that provides AI automation solutions for dental clinics. 
Use the following context to answer the user's question. Only provide information based on the context provided.
If the question cannot be answered from the context, politely say you don't have that specific information and offer to help with something else.

Be conversational, helpful, and professional. If someone asks about booking a demo or scheduling, mention they can book directly at https://calendly.com/ainovatos/30min.

Context:
${context}

User Question: ${query}

Please provide a helpful, accurate response based only on the context above:`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating RAG response:', error);
      return "I apologize, but I'm having trouble processing your request right now. Please try again or contact us directly at ainovatos@gmail.com for assistance.";
    }
  }
}

export const ragService = new RAGService();