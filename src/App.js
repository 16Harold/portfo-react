import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl md:mx-auto md:px-16 ">
       <Navbar />
       <Banner />
       <Projects />
       <Resume />
       <Skills />
       <Contacts />
       <Footer />
      </div>
    </div>
  );
}

export default App;
