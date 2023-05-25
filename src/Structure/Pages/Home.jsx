import React, { useEffect } from 'react';
import css from '../../mainApp.module.css';
import Hero from '../../Structure/Hero';
import Services from '../../Structure/Services';
import WhereToUse from '../../Structure/WhereToUse';
import HowItWorks from '../../Structure/HowItWorks';
import WhyWe from '../../Structure/WhyWe';
import WhatYouGet from '../../Structure/WhatYouGet';
import Clients from '../../Structure/Clients';
import SmallImg from '../../Structure/SmallImg';
import ContactForm from '../../Structure/ContactForm';
import { useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
export default function Home() {
  let url = useSearchParams();
  useEffect(() => {
    console.log('useEffect URL', url);
  }, [url]);
  const servicesAnchor = useRef(null);
  // const contactsAnchor = document.getElementById('contacts1');
  const scrollIntoServices = () => {
    servicesAnchor.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={css.content}>
      <button type="button" onClick={scrollIntoServices}>
        Services temp button
      </button>
      <Hero />
      <div ref={servicesAnchor}></div>
      <Services id="services1" />

      <WhereToUse />
      <HowItWorks />
      <WhyWe />
      <WhatYouGet />
      <SmallImg />
      <Clients />
      <ContactForm id="contacts1" />
    </div>
  );
}
