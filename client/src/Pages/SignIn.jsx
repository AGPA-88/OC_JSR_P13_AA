import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import SignIn from '../Components/SignIn/SignIn';

function Index () {
    return(
        <body>
          <Nav />
          <main>
            <SignIn />
          </main>
          <Footer />
        </body>
    )
}

export default Index;