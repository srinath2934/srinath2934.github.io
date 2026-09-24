import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { AntiSlopAudit } from './components/AntiSlopAudit';
import { RecruiterLetter } from './components/RecruiterLetter';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <SelectedWork />
        <AntiSlopAudit />
        <RecruiterLetter />
        <TechStack />
        <EngineeringPhilosophy />
        <Experience />
        <Research />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
