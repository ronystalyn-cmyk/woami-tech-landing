import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { ClientBenefits } from './components/ClientBenefits';
import { ForTechnicians } from './components/ForTechnicians';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <ClientBenefits />
        <ForTechnicians />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
