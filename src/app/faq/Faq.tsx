import React from 'next'
import { useState } from 'react'

const Faq = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const toggleFaq =(index: number)=>{
        setCurrentIndex(currentIndex===index?null:index);
    }
    const faqs: string[] = [
        'Why should I buy this template?',
        'Why should I buy this template?',
        'Why should I buy this template?',
        'Why should I buy this template?',
        'Why should I buy this template?',
        'Why should I buy this template?'
      ];
  return (
    <div>
        <section className='main faq'>
            <h2 className='main faq page heading'>Have Questions? We've got you!</h2>
        </section>
        <section className='second part '>
            <h3 className='second part heading of faq'>Frequently Asked Questions</h3>

        </section>

    </div>
  )
}

export default Faq