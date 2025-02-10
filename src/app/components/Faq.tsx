'use client';
import React, { useState } from 'react';

const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setCurrentIndex(currentIndex === index ? null : index); 
  };

  
  const faqData = [
    {
      question: 'How do I create an account on KnowledgeNest?',
      answer: 'Visit the KnowledgeNest homepage and click on the "Sign Up" button. Fill in your details like name, email, and password, or sign up using your Google or social media account. After registration, you’ll receive a confirmation email—just verify it, and you’re all set!',
    },
    {
      question: 'How can I enroll in a course?',
      answer: 'After logging in, go to the "Courses" section. Browse or search for the course you’re interested in. Click on the course title, then hit the "Enroll" button. For paid courses, you’ll be prompted to complete the payment before enrolling.',
    },
    {
      question: 'I forgot my password—how do I reset it?',
      answer: 'On the login page, click "Forgot Password?" Enter your registered email address, and we’ll send you a password reset link. Follow the instructions in the email to create a new password.',
    },
    {
      question: 'How do I track my course progress and view my grades?',
      answer: 'Go to your Dashboard and click on the specific course. You’ll see a progress tracker showing completed lessons, pending assignments, and grades. For detailed performance, check the "Grades" or "Reports" section within the course.',
    },
    {
      question: 'Can I download course materials for offline use?',
      answer: 'Yes, instructors can enable downloads for specific resources like PDFs, slides, or documents. Look for the download icon next to the material. However, video lectures and interactive content may only be available online to ensure content security.',
    },
    {
      question: 'What should I do if I face technical issues during a course?',
      answer: 'First, try refreshing the page or clearing your browser cache. Ensure you have a stable internet connection. If the issue persists, go to the "Help Center" to check troubleshooting guides or contact our support team with details of the problem.',
    },
    {
      question: 'Will I receive a certificate after completing a course?',
      answer: 'Yes, most courses offer a certificate of completion once you meet all the requirements, like finishing lessons, submitting assignments, and passing quizzes. You can download your certificate from the "Certificates" section in your dashboard.',
    },
    {
      question: 'Is my personal data secure on KnowledgeNest?',
      answer: 'Absolutely. We use advanced encryption protocols and follow strict data privacy policies to protect your information. Your data will never be shared with third parties without your consent.',
    },
  ];

  return (
    <div >
      <section >
        <h2 >Have Questions? We've Got You!</h2>
      </section>

      <section>
        <h3 >Frequently Asked Questions</h3>
        
        {faqData.map((item, index) => {
            return (
                <div key={index}>
                    <button
                        onClick={() => toggleFaq(index)}
                    >
                        <span>{item.question}</span>
                        <span>{currentIndex === index ? '−' : '+'}</span>
                    </button>

                    {currentIndex === index && (
                        <p>{item.answer}</p>
                    )}
                </div>
            );
        })}
      </section>
      <section >
        <h3 >Still have questions? How can we help?</h3>
        <form >
          <input type="text" placeholder="First Name"  />
          <input type="text" placeholder="Last Name"  />
          <input type="email" placeholder="Email"  />
          <textarea placeholder="Message" ></textarea>
          <button type="submit" >Send</button>
        </form>
      </section>
    </div>
  );
};

export default Faq;
