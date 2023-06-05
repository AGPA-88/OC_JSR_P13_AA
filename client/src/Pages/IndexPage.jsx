import React from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import Features from '../Components/Features/Features';
import Footer from '../Components/Footer/Footer';

function Index () {
    return(
        <div>
          <Nav />
          <main>
            <Hero />
            <Features />
          </main>
          <Footer />
        </div>
    )
}

export default Index;