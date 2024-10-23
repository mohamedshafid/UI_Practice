import React from 'react';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import InfoCard from './components/InfoCard';
import Faq from './components/Faq';
const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-[70%] mx-auto bg-[#ffffff]">
        <Pricing />
        <Workflow />
        <InfoCard />
        <Faq/>
      </div>
    </>
  );
}

export default App;
