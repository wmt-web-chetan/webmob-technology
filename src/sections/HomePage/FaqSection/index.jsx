import FaqWrapper from '@/components/FaqWrapper';
import React from 'react';

const FaqSection = () => {
  const leftColumnFaqs = [
    {
      id: 'ai-enabled',
      question: 'Is your "AI-enabled" process just a gimmick?',
      answer: 'Not at all. Through real AI and force multipliers, we provide the critical thinking and architectural vision. The AI co-pilot handles the complex but time-consuming boilerplate code and naming boilerplate code and naming conventions, allowing our team to focus on building a better product for you, faster.'
    },
    {
      id: 'involvement',
      question: 'How involved will I be in this project?',
      answer: 'Your involvement level is completely flexible and tailored to your preferences. We can work independently with minimal check-ins, or collaborate closely with daily updates and feedback sessions.'
    },
    {
      id: 'advanced-process',
      question: 'Is your advanced process more expensive?',
      answer: 'Our advanced process actually delivers better value through efficiency gains and reduced revision cycles. The initial investment often pays for itself through faster delivery and higher quality outcomes.'
    },
    {
      id: 'companies',
      question: 'What kind of companies do you work with?',
      answer: 'We work with forward-thinking companies of all sizes, from innovative startups to established enterprises, across various industries including tech, healthcare, finance, and e-commerce.'
    },
    {
      id: 'security',
      question: 'How do you ensure the security of my project?',
      answer: 'We implement industry-standard security protocols including encrypted communications, secure development environments, NDAs, and comprehensive data protection measures throughout the entire project lifecycle.'
    },
    {
      id: 'existing-project',
      question: 'Can you take over an existing project?',
      answer: 'Absolutely! We specialize in rescuing stalled projects, modernizing legacy systems, and seamlessly taking over existing codebases while maintaining continuity and improving performance.'
    }
  ];

  const rightColumnFaqs = [
    {
      id: 'uiux-process',
      question: 'What does your UI/UX design process look like?',
      answer: 'Our UI/UX process combines user research, iterative prototyping, and data-driven design decisions. We create wireframes, interactive prototypes, and conduct usability testing to ensure optimal user experience.'
    },
    {
      id: 'project-management',
      question: 'How do you handle project management?',
      answer: 'We use agile methodologies with transparent communication through regular sprints, milestone reviews, and real-time project tracking tools that keep you informed every step of the way.'
    },
    {
      id: 'after-launch',
      question: 'What happens after my project is launched?',
      answer: 'We provide comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and ongoing maintenance to ensure your project continues to perform optimally.'
    },
    {
      id: 'understand-industry',
      question: 'How do you ensure you understand my industry?',
      answer: 'We conduct thorough industry research, competitor analysis, and collaborate closely with your team to understand your specific market dynamics, regulations, and user expectations.'
    },
    {
      id: 'first-step',
      question: "What's the first step to starting a project?",
      answer: 'The first step is a comprehensive discovery call where we discuss your goals, challenges, timeline, and requirements. This helps us create a tailored proposal and project roadmap.'
    },
    {
      id: 'why-webmob',
      question: 'Why choose WebMob Technologies over hiring in-house?',
      answer: 'We offer specialized expertise, faster time-to-market, cost efficiency, and access to cutting-edge technologies without the overhead of hiring, training, and managing an in-house team.'
    }
  ];

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 sm:py-16 lg:py-24'>
      <div className='flex justify-center'>
        <h2 className='h2-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-900 leading-tight'>
          Your <span className='text-gradient-primary font-bold'>Questions</span>, Answered with <span className='text-gradient-primary font-bold'>Clarity</span>.
        </h2>
      </div>
      
      <div className='flex justify-center mt-4 sm:mt-6 h2-description'>
        <p className='text-base sm:text-lg text-text-secondary max-w-4xl text-center leading-relaxed px-2 sm:px-0'>
          We believe in radical transparency. Here are straightforward answers to some of the most common questions we receive.
        </p>
      </div>

      <FaqWrapper 
        leftColumnFaqs={leftColumnFaqs} 
        rightColumnFaqs={rightColumnFaqs} 
      />
    </div>
  );
};

export default FaqSection;