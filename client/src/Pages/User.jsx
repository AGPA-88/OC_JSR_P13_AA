import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import User from '../Components/User/User';

function Index () {
    return(
        <div>
          <Nav />
          <main>
            <User />
          </main>
          <Footer />
        </div>
    )
}

export default Index;