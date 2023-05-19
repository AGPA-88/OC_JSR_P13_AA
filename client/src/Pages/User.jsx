import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import User from '../Components/User/User';

function Index () {
    return(
        <body>
          <Nav />
          <main>
            <User />
          </main>
          <Footer />
        </body>
    )
}

export default Index;