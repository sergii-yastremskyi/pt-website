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

export default function Home() {
  // const contactsAnchor = document.getElementById('contacts1');

  return (
    <div className={css.content}>
      <Hero />

      <Services id="services1" />

      <WhereToUse />
      <HowItWorks />
      <WhyWe />
      <WhatYouGet />
      <SmallImg />
      <Clients />
      <div id="">
        <ContactForm id="contacts1" />
      </div>
    </div>
  );
}
