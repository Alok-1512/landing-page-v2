import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'How to stay protected from recruitment frauds?',
      answer:
        ' Verify the legitimacy of the company and the job opening by researching the company, checking their official website, and contacting them directly. 2) Be wary of job offers that seem too good to be true, request upfront payment or personal information, or involve unconventional recruitment methods.',
    },
    {
      question: 'How to stay protected from recruitment frauds?',
      answer:
        ' Verify the legitimacy of the company and the job opening by researching the company, checking their official website, and contacting them directly. 2) Be wary of job offers that seem too good to be true, request upfront payment or personal information, or involve unconventional recruitment methods.',
    },
    {
      question: 'How to stay protected from recruitment frauds?',
      answer:
        ' Verify the legitimacy of the company and the job opening by researching the company, checking their official website, and contacting them directly. 2) Be wary of job offers that seem too good to be true, request upfront payment or personal information, or involve unconventional recruitment methods.',
    },
    {
      question: 'How to stay protected from recruitment frauds?',
      answer:
        ' Verify the legitimacy of the company and the job opening by researching the company, checking their official website, and contacting them directly. 2) Be wary of job offers that seem too good to be true, request upfront payment or personal information, or involve unconventional recruitment methods.',
    },
    {
      question: 'How to stay protected from recruitment frauds?',
      answer:
        ' Verify the legitimacy of the company and the job opening by researching the company, checking their official website, and contacting them directly. 2) Be wary of job offers that seem too good to be true, request upfront payment or personal information, or involve unconventional recruitment methods.',
    },
    {
      question: 'How to stay protected from recruitment frauds?',
      answer:
        ' Verify the legitimacy of the company and the job opening by researching the company, checking their official website, and contacting them directly. 2) Be wary of job offers that seem too good to be true, request upfront payment or personal information, or involve unconventional recruitment methods.',
    },
  ];

  return (
    <div className='faq-accordian basis-3/5'>
      {faqs.map((faq, index) => (
        <div key={index} className='border-b border-gray-300'>
          <button
            className='flex items-center justify-between w-full py-4 px-6 text-left focus:outline-none'
            onClick={() => toggleAccordion(index)}
          >
            <span className='font-medium'>{faq.question}</span>
            <span
              className={`transform transition-transform ${
                index === activeIndex ? 'rotate-180' : 'rotate-0'
              }`}
            >
              &#9660;
            </span>
          </button>
          {index === activeIndex && (
            <div className='p-6 bg-gray-100'>
              <p className='text-gray-700'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div className='text-right my-8'>
        <a href='' className='read-more faq'>
          Read More
        </a>
      </div>
    </div>
  );
};

export default FAQs;
