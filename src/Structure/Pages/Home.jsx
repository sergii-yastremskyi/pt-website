import React from 'react';

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
  return (
    <>
      <Hero />
      <Services id="services" />
      <WhereToUse />
      <HowItWorks />
      <WhyWe />
      <WhatYouGet />
      <SmallImg />
      <Clients />
      <ContactForm />
    </>
  );
}
