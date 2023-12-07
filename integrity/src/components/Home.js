import React from 'react';
import Logo from './Logo';
import Summary from './Summary';
import Contact from './Contact';

function Home() {
  return (
    <div className="home-container">
      <Logo />
      <div className="container">
        
        <Summary />

        <section class="contact" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Home;
